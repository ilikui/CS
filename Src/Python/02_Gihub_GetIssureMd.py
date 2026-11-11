import time
import requests

OWNER = "ruanyf"
REPO = "weekly"
TOKEN = " "  # 请在这里填入你生成的 ghp_ 开头的 Token

url = "https://api.github.com/repos/ruanyf/weekly/issues"
headers = {
    "Authorization": f"Bearer {TOKEN}",
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28"
}

all_issues = []
page = 1

print(f"正在请求地址: {url}")

while True:
    params = {
        "state": "all",      # "all" 获取全部，"open" 仅获取未关闭的
        "per_page": 100,     # 每页 100 条
        "page": page
    }
    
    response = requests.get(url, headers=headers, params=params)
    
    if response.status_code != 200:
        print(f"请求中断，状态码: {response.status_code}, 信息: {response.text}")
        break
        
    data = response.json()
    if not data:
        print("全部数据拉取完成！")
        break
        
    # 过滤掉 Pull Request，只保留纯 Issue
    for item in data:
        if "pull_request" not in item:
            all_issues.append({
                "number": item.get("number"),
                "title": item.get("title"),
                "state": item.get("state"),
                "user": item.get("user", {}).get("login"),
                "labels": ", ".join([l["name"] for l in item.get("labels", [])]) or "无",
                "comments": item.get("comments"),
                "created_at": item.get("created_at"),
                "html_url": item.get("html_url"),
                "body": item.get("body") or "（无正文内容）"
            })
            
    print(f"已处理第 {page} 页，累计获取 {len(all_issues)} 条有效 Issue...")
    page += 1
    time.sleep(0.2)

# 保存为 Markdown 文件
md_file = "ruanyf_weekly_issues.md"
if all_issues:
    with open(md_file, "w", encoding="utf-8") as f:
        f.write(f"# {OWNER}/{REPO} Issues 汇总\n\n")
        f.write(f"> 共计导出 **{len(all_issues)}** 条 Issue 数据。\n\n---\n\n")
        
        for issue in all_issues:
            # 写入标题与编号
            f.write(f"## #{issue['number']} {issue['title']}\n\n")
            # 写入元信息列表
            f.write(f"- **状态**：`{issue['state']}`\n")
            f.write(f"- **作者**：@{issue['user']}\n")
            f.write(f"- **创建时间**：{issue['created_at']}\n")
            f.write(f"- **标签**：{issue['labels']}\n")
            f.write(f"- **评论数**：{issue['comments']}\n")
            f.write(f"- **原文链接**：[{issue['html_url']}]({issue['html_url']})\n\n")
            # 写入正文内容
            f.write("### 正文内容\n\n")
            f.write(f"{issue['body'].strip()}\n\n")
            f.write("---\n\n")
            
    print(f"数据已成功保存至 {md_file}")
