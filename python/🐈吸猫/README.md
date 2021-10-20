猫奴吸猫 🐈
-----------------------
#### 环境
- python 3.7.1
- 文件夹路径: /Users/xxx/Desktop/cat

#### 安装urllib 

```
pip install urllib3
```
#### 修改cat.py中路径为你自己电脑路径, 桌面新建cat文件夹
```
文件夹路径: /Users/xxx/Desktop/cat 
```

### 参数修改

```python 
for i in range(150,500):   
	url = 'http://placekitten.com/' + str(i) + '/200'    // 宽度: str(i) 高度: 200  参数可随意修改, 默认150 * 200 开始 
	response = urllib.request.urlopen(url)
	cat_img = response.read()
	name = '/Users/xxx/Desktop/cat/' + str(i) + '.jpg'
	with open (name,'wb') as f:
		f.write(cat_img)
		print ('下载完成第%d张猫咪照片' % (i - 149))
```

#### 运行

```
python cat.py 
```

你将源源不断获取猫咪照片