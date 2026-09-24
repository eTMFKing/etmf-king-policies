# eTMF 王政策页面

这是 eTMF 王面向种子用户和 App 审核的公开政策页面，包含：

- `/terms`：用户协议
- `/privacy`：隐私政策
- `/recognition-quality`：识别质量改进计划
- `/tool-privacy`：独立 eTMF扫描王 Tool App 隐私政策

## GitHub Pages

仓库通过 GitHub Actions 构建静态站点并发布到 GitHub Pages。仓库项目站点地址为：

`https://etmfking.github.io/etmf-king-policies/`

对应政策地址：

- `https://etmfking.github.io/etmf-king-policies/terms`
- `https://etmfking.github.io/etmf-king-policies/privacy`
- `https://etmfking.github.io/etmf-king-policies/recognition-quality`
- `https://etmfking.github.io/etmf-king-policies/tool-privacy`

正式发布前应再次核对页面内容、运营主体、联系邮箱、数据处理地域和保留期限；不要在此仓库提交账号、密码、Token、生产环境变量或用户数据。

本地验证：

```bash
npm ci
npm run build
```
