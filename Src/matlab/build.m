% =========================================================================
% 新版 MATLAB 一键打包 Liner.m 为独立 EXE 及安装包的脚本
% 使用方法：确保 Liner.m 与本脚本在同一目录下，直接点击"运行"即可
% =========================================================================
clc; clear;

% 1. 检查主程序文件和编译器授权
mainFile = 'Liner.m';
if ~isfile(mainFile)
    error('未找到 %s，请确保本脚本与 Liner.m 在同一个文件夹中！', mainFile);
end

if isempty(ver('compiler'))
    error('当前 MATLAB 未安装 MATLAB Compiler 工具箱，无法执行打包。');
end

% 2. 配置输出目录与软件名称
appName      = 'LookupTableTool';          % 生成的 EXE 软件名称
outputDir    = fullfile(pwd, 'Build_EXE'); % 独立 EXE 输出目录
installerDir = fullfile(pwd, 'Installer'); % 安装包输出目录

fprintf('====================================================\n');
fprintf('[1/2] 正在编译 %s 为独立 Windows 应用程序 (.exe)...\n', mainFile);
fprintf('编译过程通常需要 1 ~ 3 分钟，请耐心等待...\n');
fprintf('====================================================\n');

try
    % 3. 使用新版官方推荐函数编译独立 Windows 应用程序
    % 自动生成 buildResults 对象（包含新版所需的 buildresults.json，彻底消除警告）
    buildOpts = compiler.build.StandaloneApplicationOptions(mainFile, ...
        'ExecutableName', appName, ...
        'OutputDir', outputDir, ...
        'TreatInputsAsNumeric', false, ...
        'Verbose', true);

    buildResults = compiler.build.standaloneWindowsApplication(buildOpts);

    fprintf('\n[1/2] 独立 EXE 编译成功！文件位于:\n      %s\n', fullfile(outputDir, [appName '.exe']));

    % 4. 直接传入 buildResults 对象生成跨电脑分发安装包
    fprintf('\n[2/2] 正在生成跨电脑分发安装包...\n');
    
    pkgOpts = compiler.package.InstallerOptions(buildResults, ...
        'ApplicationName', appName, ...
        'AuthorName', 'Engineering Tool', ...
        'Version', '1.0', ...
        'OutputDir', installerDir, ...
        'InstallerName', [appName '_Setup'], ...
        'RuntimeDelivery', 'web'); % 'web' 为在线下载 Runtime(体积小)；如需离线包改为 'installer'

    compiler.package.installer(buildResults, pkgOpts);

    fprintf('\n[2/2] 分发安装包制作完成！\n');
    fprintf('====================================================\n');
    fprintf('请将以下文件夹中的 %s_Setup.exe 发给其他电脑安装运行：\n', appName);
    fprintf('>>> %s\n', installerDir);
    fprintf('====================================================\n');

    % 自动打开安装包所在文件夹
    winopen(installerDir);

catch ME
    fprintf('\n打包过程中出现错误:\n%s\n', ME.message);
end
