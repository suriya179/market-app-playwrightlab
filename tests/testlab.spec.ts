import { test, expect } from '@playwright/test';
test('TC04 Login ไม่ใส่เบอร์', async ({ page }) => {
// 1. เปิดหน้า Login
await page.goto('http://localhost:5173/');
// 2. กรอกหมายเลขโทรศัพท์
await page
.getByLabel('หมายเลขโทรศัพท์มือถือ')
.fill('');
// 3. กรอกรหัสผ่าน
await page
.getByPlaceholder('อย่างน้อย 8 ตัวอักษร')
.fill('uCrwVaBW39o_0G0Q5QwAVrqr');
// 4. กดปุ่มเข้าสู่ระบบ
await page
.getByRole('button', { name: 'เข้าสู่ระบบ' })
.click();
// 5. ตรวจสอบว่า Login สำเร็จ และมีคำว่า ยินดีต้อนรับ
await expect(page.getByText('ยินดีต้อนรับ')).toBeVisible();})
test('TC05 Login ไม่ใส่รหัส', async ({ page }) => {
// 1. เปิดหน้า Login
await page.goto('http://localhost:5173/');
// 2. กรอกหมายเลขโทรศัพท์
await page
.getByLabel('หมายเลขโทรศัพท์มือถือ')
.fill('0800000000');
// 3. กรอกรหัสผ่าน
await page
.getByPlaceholder('อย่างน้อย 8 ตัวอักษร')
.fill('');
// 4. กดปุ่มเข้าสู่ระบบ
await page
.getByRole('button', { name: 'เข้าสู่ระบบ' })
.click();
// 5. ตรวจสอบว่า Login สำเร็จ และมีคำว่า ยินดีต้อนรับ
await expect(page.getByText('ยินดีต้อนรับ')).toBeVisible();})
test('TC06 Login ใส่เบอร์เกิน', async ({ page }) => {
// 1. เปิดหน้า Login
await page.goto('http://localhost:5173/');
// 2. กรอกหมายเลขโทรศัพท์
await page
.getByLabel('หมายเลขโทรศัพท์มือถือ')
.fill('080000000015');
// 3. กรอกรหัสผ่าน
await page
.getByPlaceholder('อย่างน้อย 8 ตัวอักษร')
.fill('uCrwVaBW39o_0G0Q5QwAVrqr');
// 4. กดปุ่มเข้าสู่ระบบ
await page
.getByRole('button', { name: 'เข้าสู่ระบบ' })
.click();
})