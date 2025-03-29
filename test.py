import json
import glob
import os

def fix_tsbuildutils_references(file_path):
    """修复 tsbuildutils 的引用"""
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # 检查并修复 devDependencies
    if 'devDependencies' in data:
        if '@euraxluo/tsbuildutils' in data['devDependencies']:
            data['devDependencies']['@euraxluo/tsbuildutils'] = data['devDependencies'].pop('@euraxluo/tsbuildutils')
    
    # 写回文件
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)
    print(f"已处理: {file_path}")

def main():
    root_dir = os.path.dirname(os.path.abspath(__file__))
    package_files = glob.glob(os.path.join(root_dir, '**/package.json'), recursive=True)
    
    for file_path in package_files:
        fix_tsbuildutils_references(file_path)

if __name__ == '__main__':
    main()