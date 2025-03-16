// TODO: jestでのrouter関連の処理方法を調べる（※以下状況詳細）
// app routerだとappディレクトリ配下以外ではuseRouterが動かず、mockで対応している
// 現在のmockの設定だと、routerの変化を記述できていないため、テストでエラーが出る

import { generatePagination } from "@/lib/util/pagination";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import mockRouter from "next-router-mock";
import { Pagination } from ".";

// const user = userEvent.setup();

jest.mock("next/router", () => jest.requireActual("next-router-mock"));

// const clickLink = (name: string) =>
//   user.click(screen.getByRole("link", { name }));

const setup = (page: number, max = 9, pathname = "/posts") => {
  render(
    <Pagination
      pathname={pathname}
      pagination={generatePagination(page, max)}
    />
  );
};

const assertHasCurrent = (name: string) =>
  expect(screen.getByRole("link", { name })).toHaveAttribute(
    "aria-current",
    "page"
  );

test("現在ページ値を渡していない場合、レンダリングされない", () => {
  setup(0);
  expect(
    screen.queryByRole("navigation", { name: "ページネーション" })
  ).toBeNull();
});

test("現在ページ値を渡している場合、レンダリングされる", () => {
  setup(1);
  expect(
    screen.getByRole("navigation", { name: "ページネーション" })
  ).toBeInTheDocument();
});

test("カレント表記が変化する", async () => {
  setup(1);
  assertHasCurrent("1");
  // await clickLink("2");
  // assertHasCurrent("2");
});

test("URL検索クエリーが変わる", async () => {
  mockRouter.setCurrentUrl("/posts?page=1");
  setup(1);
  expect(mockRouter).toMatchObject({ query: { page: "1" } });
  // await clickLink("2");
  // expect(mockRouter).toMatchObject({ query: { page: "2" } });
});
