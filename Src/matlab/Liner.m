function Liner
    % 创建主窗口
    fig = uifigure('Name', '一维查表与线性插值可视化工具 (含 Factor/Offset 与导出功能)', ...
                   'Position', horzcat(100, 100, 1040, 620), ...
                   'Color', horzcat(0.96, 0.96, 0.96));

    % 创建左右布局网格 (1行2列)
    mainGrid = uigridlayout(fig, horzcat(1, 2));
    mainGrid.ColumnWidth = {360, '1x'};
    mainGrid.Padding = horzcat(15, 15, 15, 15);
    mainGrid.ColumnSpacing = 15;

    % =====================================================================
    % 左侧控制面板
    % =====================================================================
    leftPanel = uipanel(mainGrid, 'Title', '参数配置与查表输入', ...
                        'FontWeight', 'bold', 'FontSize', 12, ...
                        'BackgroundColor', 'w');
    leftGrid = uigridlayout(leftPanel, horzcat(11, 1));
    leftGrid.RowHeight = {20, 30, 20, 30, 20, 30, 20, 30, 20, 30, '1x'};
    leftGrid.RowSpacing = 5;
    leftGrid.Padding = horzcat(10, 10, 10, 10);

    % 1. X轴数据输入
    uilabel(leftGrid, 'Text', 'X 轴原始数据 (用空格或逗号分隔):', 'FontWeight', 'bold');
    xInput = uieditfield(leftGrid, 'text', 'Value', '0, 10, 20, 35, 50, 75, 100');

    % 2. Y轴数据输入
    uilabel(leftGrid, 'Text', 'Y 轴原始表数据 (与 X 轴一一对应):', 'FontWeight', 'bold');
    yInput = uieditfield(leftGrid, 'text', 'Value', '0, 15, 22, 48, 40, 85, 95');

    % 3. 查询 X 值输入
    uilabel(leftGrid, 'Text', '输入查询 X 值 (支持单个或多个数值):', 'FontWeight', 'bold');
    queryInput = uieditfield(leftGrid, 'text', 'Value', '5, 28, 62.5');

    % 4. Factor 和 Offset 配置 (并排两列)
    uilabel(leftGrid, 'Text', 'Y 值线性转换: Y_final = Y_raw * Factor + Offset', 'FontWeight', 'bold', 'FontColor', horzcat(0, 0.35, 0.65));
    
    foGrid = uigridlayout(leftGrid, horzcat(1, 4));
    foGrid.ColumnWidth = {55, '1x', 55, '1x'};
    foGrid.Padding = horzcat(0, 0, 0, 0);
    foGrid.ColumnSpacing = 6;

    uilabel(foGrid, 'Text', 'Factor:', 'FontWeight', 'bold', 'HorizontalAlignment', 'right');
    factorInput = uieditfield(foGrid, 'numeric', 'Value', 1.0);

    uilabel(foGrid, 'Text', 'Offset:', 'FontWeight', 'bold', 'HorizontalAlignment', 'right');
    offsetInput = uieditfield(foGrid, 'numeric', 'Value', 0.0);

    % 5. 越界处理模式选择
    uilabel(leftGrid, 'Text', '越界处理模式 (超出 X 范围时):', 'FontWeight', 'bold');
    extrapDropdown = uidropdown(leftGrid, ...
        'Items', {'钳位在边界值 (Clamping)', '线性外推 (Extrapolation)', '返回 NaN (不外推)'}, ...
        'Value', '钳位在边界值 (Clamping)');

    % 6. 按钮组与结果显示区域
    bottomGrid = uigridlayout(leftGrid, horzcat(3, 1));
    bottomGrid.RowHeight = {38, 20, '1x'};
    bottomGrid.Padding = horzcat(0, 5, 0, 0);

    % 并排放置"计算"和"导出图片"两个按钮
    btnGrid = uigridlayout(bottomGrid, horzcat(1, 2));
    btnGrid.ColumnWidth = {'1x', '1x'};
    btnGrid.Padding = horzcat(0, 0, 0, 0);
    btnGrid.ColumnSpacing = 8;

    uibutton(btnGrid, 'Text', '计算并更新图表', ...
             'FontSize', 12, 'FontWeight', 'bold', ...
             'BackgroundColor', horzcat(0, 0.45, 0.74), 'FontColor', 'w', ...
             'ButtonPushedFcn', @updatePlot);

    uibutton(btnGrid, 'Text', '导出图表图片', ...
             'FontSize', 12, 'FontWeight', 'bold', ...
             'BackgroundColor', horzcat(0.18, 0.55, 0.34), 'FontColor', 'w', ...
             'ButtonPushedFcn', @exportImage);

    uilabel(bottomGrid, 'Text', '查表插值输出结果:', 'FontWeight', 'bold');
    
    % 使用3列表格展示结果
    resTable = uitable(bottomGrid, 'ColumnName', {'查询 X', '原始插值 Y', '最终 Y (转换后)'}, ...
                       'ColumnWidth', {'1x', '1x', '1x'}, ...
                       'RowName', {});

    % =====================================================================
    % 右侧可视化绘图区域
    % =====================================================================
    rightPanel = uipanel(mainGrid, 'Title', '线性插值可视化视图 (支持鼠标缩放与拖拽)', ...
                         'FontWeight', 'bold', 'FontSize', 12, ...
                         'BackgroundColor', 'w');
    rightGrid = uigridlayout(rightPanel, horzcat(1, 1));
    ax = uiaxes(rightGrid);
    ax.FontSize = 11;
    grid(ax, 'on');
    box(ax, 'on');

    % =====================================================================
    % 核心计算与绘图回调函数
    % =====================================================================
    function updatePlot(~, ~)
        % 1. 解析文本与数值输入
        x_tab  = str2num(xInput.Value); %#ok<ST2NM>
        y_tab  = str2num(yInput.Value); %#ok<ST2NM>
        x_q    = str2num(queryInput.Value); %#ok<ST2NM>
        factor = factorInput.Value;
        offset = offsetInput.Value;

        % 2. 输入合法性校验
        if isempty(x_tab) || isempty(y_tab) || length(x_tab) ~= length(y_tab) || length(x_tab) < 2
            uialert(fig, '请确保 X 轴和 Y 轴输入有效数字，且长度一致（至少包含 2 个点）。', '输入格式错误');
            return;
        end
        if isempty(x_q)
            uialert(fig, '请输入至少一个有效的查询 X 值。', '查询值错误');
            return;
        end

        % 自动对 X 轴进行从小到大排序
        [x_tab, sortIdx] = sort(x_tab);
        y_tab = y_tab(sortIdx);
        if length(unique(x_tab)) ~= length(x_tab)
            uialert(fig, 'X 轴数据中不能包含重复的数值。', '数据单调性错误');
            return;
        end

        % 3. 根据下拉菜单选择越界处理策略并计算原始插值
        mode = extrapDropdown.Value;
        if contains(mode, 'Clamping')
            x_clamped = max(min(x_tab), min(max(x_tab), x_q));
            y_q_raw = interp1(x_tab, y_tab, x_clamped, 'linear');
        elseif contains(mode, 'Extrapolation')
            y_q_raw = interp1(x_tab, y_tab, x_q, 'linear', 'extrap');
        else
            y_q_raw = interp1(x_tab, y_tab, x_q, 'linear');
        end

        % 4. 应用 Factor 和 Offset 进行线性变换
        y_tab_scaled = y_tab .* factor + offset;
        y_q_final    = y_q_raw .* factor + offset;

        % 5. 更新左侧结果表格
        resTable.Data = horzcat(x_q(:), y_q_raw(:), y_q_final(:));

        % 6. 刷新右侧可视化图表
        cla(ax);
        hold(ax, 'on');

        % 如果 Factor ~= 1 或 Offset ~= 0，绘制原始未转换曲线作为灰色虚线参考
        if factor ~= 1 || offset ~= 0
            plot(ax, x_tab, y_tab, '--s', ...
                 'Color', horzcat(0.6, 0.6, 0.6), 'LineWidth', 1.2, ...
                 'MarkerSize', 5, ...
                 'DisplayName', '原始表数据 (未转换)');
        end

        % 绘制应用 Factor/Offset 后的有效查表折线
        plot(ax, x_tab, y_tab_scaled, '-o', ...
             'Color', horzcat(0, 0.45, 0.74), 'LineWidth', 2, ...
             'MarkerSize', 7, 'MarkerFaceColor', horzcat(0, 0.45, 0.74), ...
             'DisplayName', sprintf('转换后表曲线 (×%.2g %+g)', factor, offset));

        % 绘制有效插值查询点 (最终 Y)
        validIdx = ~isnan(y_q_final);
        if any(validIdx)
            plot(ax, x_q(validIdx), y_q_final(validIdx), 'p', ...
                 'Color', horzcat(0.85, 0.33, 0.1), 'MarkerSize', 12, ...
                 'MarkerFaceColor', horzcat(0.85, 0.33, 0.1), ...
                 'DisplayName', '最终插值查询点');

            % 计算坐标轴显示边界
            if factor ~= 1 || offset ~= 0
                all_y = horzcat(y_tab, y_tab_scaled, y_q_final(validIdx));
            else
                all_y = horzcat(y_tab_scaled, y_q_final(validIdx));
            end
            all_x = horzcat(x_tab, x_q(validIdx));

            dx = max(all_x) - min(all_x);
            dy = max(all_y) - min(all_y);
            if dx == 0, dx = 1; end
            if dy == 0, dy = 1; end

            x_min_lim = min(all_x) - 0.08 * dx;
            x_max_lim = max(all_x) + 0.14 * dx;
            y_min_lim = min(all_y) - 0.10 * dy;
            y_max_lim = max(all_y) + 0.12 * dy;

            xlim(ax, horzcat(x_min_lim, x_max_lim));
            ylim(ax, horzcat(y_min_lim, y_max_lim));

            % 绘制每个查询点的投影虚线和坐标标签
            for i = 1:length(x_q)
                if validIdx(i)
                    plot(ax, horzcat(x_q(i), x_q(i)), horzcat(y_min_lim, y_q_final(i)), ':', 'Color', horzcat(0.65, 0.65, 0.65), 'HandleVisibility', 'off');
                    plot(ax, horzcat(x_min_lim, x_q(i)), horzcat(y_q_final(i), y_q_final(i)), ':', 'Color', horzcat(0.65, 0.65, 0.65), 'HandleVisibility', 'off');
                    text(ax, x_q(i), y_q_final(i), sprintf('  (%.2f, %.2f)', x_q(i), y_q_final(i)), ...
                         'Color', horzcat(0.85, 0.33, 0.1), 'FontWeight', 'bold', 'FontSize', 10, ...
                         'VerticalAlignment', 'bottom');
                end
            end
        end

        xlabel(ax, '输入轴 (X)', 'FontWeight', 'bold');
        ylabel(ax, '输出轴 (Y)', 'FontWeight', 'bold');
        title(ax, sprintf('一维查表线性插值 (Factor = %g, Offset = %g)', factor, offset));
        legend(ax, 'Location', 'northwest');
        hold(ax, 'off');
    end

    % =====================================================================
    % 导出图表图片回调函数
    % =====================================================================
    function exportImage(~, ~)
        % 弹出保存文件对话框，支持常见图片与矢量格式
        filter = {'*.png', 'PNG 高清位图 (*.png)'; ...
                  '*.jpg', 'JPEG 图像 (*.jpg)'; ...
                  '*.pdf', 'PDF 矢量文档 (*.pdf)'; ...
                  '*.tif', 'TIFF 无损图像 (*.tif)'};
        defaultName = sprintf('LookupTable_Plot_%s.png', datestr(now, 'yyyymmdd_HHMMSS'));
        [fileName, pathName] = uiputfile(filter, '保存可视化图表', defaultName);
        
        % 如果用户取消保存则直接返回
        if isequal(fileName, 0) || isequal(pathName, 0)
            return;
        end
        
        fullPath = fullfile(pathName, fileName);
        
        try
            % 使用 exportgraphics 仅导出右侧坐标区内容（自动裁剪多余留白）
            if endsWith(fileName, '.pdf', 'IgnoreCase', true)
                exportgraphics(ax, fullPath, 'ContentType', 'vector');
            else
                exportgraphics(ax, fullPath, 'Resolution', 300);
            end
            uialert(fig, sprintf('图表已成功保存至:\n%s', fullPath), '导出成功', 'Icon', 'success');
        catch ME
            uialert(fig, sprintf('导出图片失败: %s', ME.message), '导出错误', 'Icon', 'error');
        end
    end

    % 启动时自动运行一次
    updatePlot();
end
