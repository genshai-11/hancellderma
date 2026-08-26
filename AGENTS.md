# Hancell Derma — AI Agent Guidelines & Pre-Merge Gate (AGENTS.md)

Tài liệu này quy định quy trình làm việc chuẩn cho AI Agent và nhà phát triển trong repository **Hancell Derma**. Mọi thay đổi code trước khi merge vào production (`main`) bắt buộc phải tuân thủ nghiêm ngặt các bước dưới đây.

---

## 🛡️ 1. Quy trình bắt buộc trước khi Merge (Pre-Merge Quality Gate)

```text
[Code Edit] ➔ [1. Local CI Check] ➔ [2. Branch & Commit] ➔ [3. GitHub Actions CI] ➔ [4. Vercel Preview] ➔ [5. User Approval & Merge]
```

### Bước 1: Kiểm tra Local CI (Bắt buộc chạy cục bộ trước)
Trước khi commit, luôn phải chạy 2 lệnh sau và đảm bảo **0 lỗi**:
1. **Typecheck / Lint:**
   ```bash
   npm run lint
   # (tsc --noEmit)
   ```
2. **Production Build:**
   ```bash
   npm run build
   # (vite build)
   ```

### Bước 2: Chuẩn Git & Author
- **Tài khoản Git Author mặc định:** `le.ntmkh@gmail.com`
- **Quy tắc phân nhánh:** Luôn tạo branch riêng xuất phát từ `main` (ví dụ: `fix/...`, `feat/...`, `chore/...`). Không commit/push thẳng code chưa kiểm thử vào `main`.
- **Commit Message:** Sử dụng chuẩn Conventional Commits (ví dụ: `fix(products): ...`, `feat(ui): ...`, `ci: ...`).

### Bước 3: Xác minh GitHub Actions CI/CD
- Sau khi push branch và tạo Pull Request, kiểm tra workflow `.github/workflows/ci.yml`.
- Đảm bảo job `Lint & Build` trên GitHub Actions chạy thành công (**Conclusion: Success**).

### Bước 4: Deploy & Kiểm tra Vercel Preview
- Tạo hoặc kích hoạt bản build Preview trên Vercel:
  ```bash
  npx vercel deploy --yes
  ```
- Gửi link **Vercel Preview** cho người dùng để kiểm tra trực quan giao diện và tính năng thực tế.

### Bước 5: Cổng kiểm soát Production (Production Gate)
- **TUYỆT ĐỐI KHÔNG** tự ý merge vào branch `main` hoặc kích hoạt deployment lên Production khi chưa có sự xác nhận/đồng ý rõ ràng từ User.

---

## 📁 2. Cấu trúc dữ liệu & Quy chuẩn dự án
- **Dữ liệu sản phẩm:** Đồng bộ giữa 2 file:
  - `src/data/products.ts` (Dữ liệu hiển thị web, bao gồm `priceValue`, `priceDisplay`, tên, mô tả đa ngôn ngữ)
  - `hancell.csv` (Bảng dữ liệu gốc)
- **Đa ngôn ngữ (i18n):** Quản lý tại `src/i18n/messages.ts` và `src/i18n/I18nProvider.tsx` hỗ trợ 3 ngôn ngữ: `ko` (Hàn), `en` (Anh), `vi` (Việt).
- **TypeScript:** Đảm bảo khai báo kiểu đầy đủ, file type definitions cho assets được định nghĩa tại `src/vite-env.d.ts`.
