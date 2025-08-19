import path from 'path';
import { fileURLToPath } from 'url';
import { test, expect } from '@playwright/test';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pdfPath = path.join(__dirname, 'Git.pdf');
const txtPath = path.join(__dirname, 'Git.txt');

test('should upload a PDF file successfully', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.setInputFiles('input[type="file"]', pdfPath);
  await expect(page.locator('text=PDF Uploaded')).toBeVisible();
});

test('should show error when uploading non-PDF', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.setInputFiles('input[type="file"]', txtPath);
  await expect(page.locator('text=Only PDF files are allowed')).toBeVisible();
});
