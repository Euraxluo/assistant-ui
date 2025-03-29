
#!/bin/bash

# 切换到项目根目录
cd "$(dirname "$0")"

# 查找所有的 package.json 文件并进行替换
find ./packages -name "package.json" -type f -exec sed -i '' \
    -e 's/@euraxluo\//@euraxluo\//g' \
    -e 's/"assistant-ui"/"euraxluo"/g' \
    -e 's/"@euraxluo\//"@euraxluo\//g' \
    -e 's/assistant-ui\.com/euraxluo.com/g' \
    -e 's/assistant-ui\/assistant-ui/euraxluo\/assistant-ui/g' {} \;

echo "完成替换！"