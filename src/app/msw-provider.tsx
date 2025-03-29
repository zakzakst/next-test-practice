"use client";

import { Suspense, use } from "react";
// import setup from '@/lib/msw/setup/'

const mockingEnabledPromise =
  typeof window !== "undefined"
    ? import("@/lib/msw/setup/browser").then(async ({ worker }) => {
        // モックサーバーを起動
        await worker.start({
          // 未処理のリクエストが発生した場合の挙動を定義
          onUnhandledRequest(request, print) {
            // Next.js関連のリクエストは無視
            if (request.url.includes("_next")) {
              return;
            }
            // それ以外の未処理リクエストは警告を出力
            print.warning();
          },
        });

        // 必要に応じてモックハンドラーを追加
        // worker.use(...handlers)

        // 現在登録されているモックハンドラーをデバッグ用に出力
        console.log(worker.listHandlers());
      })
    : Promise.resolve();

export function MSWProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // If MSW is enabled, we need to wait for the worker to start,
  // so we wrap the children in a Suspense boundary until it's ready.
  return (
    <Suspense fallback={null}>
      <MSWProviderWrapper>{children}</MSWProviderWrapper>
    </Suspense>
  );
}

function MSWProviderWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  use(mockingEnabledPromise);
  return children;
}
