import csv
import time
import requests

OWNER = "ruanyf"
REPO = "weekly"
TOKEN = " "  # 请在这里填入你生成的 ghp_ 开头的 Token

# 正确的 API 地址（注意 ://github.com 以及斜杠）
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
                "labels": ",".join([l["name"] for l in item.get("labels", [])]),
                "comments": item.get("comments"),
                "created_at": item.get("created_at"),
                "html_url": item.get("html_url"),
                "body": item.get("body")
            })
            
    print(f"已处理第 {page} 页，累计获取 {len(all_issues)} 条有效 Issue...")
    page += 1
    time.sleep(0.2)

# 保存为 CSV 文件
csv_file = "ruanyf_weekly_issues.csv"
if all_issues:
    keys = all_issues[0].keys()
    with open(csv_file, "w", newline="", encoding="utf-8-sig") as f:
        writer = csv.DictWriter(f, fieldnames=keys)
        writer.writeheader()
        writer.writerows(all_issues)
    print(f"数据已成功保存至 {csv_file}")
