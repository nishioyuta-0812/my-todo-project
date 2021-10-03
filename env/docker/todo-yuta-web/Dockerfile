# ベースイメージの作成
FROM node:12.16.1
# コンテナ内で作業するディレクトリを指定
WORKDIR /usr/src/app
# package.jsonとyarn.lockを/usr/src/appにコピー
COPY ["/Users/yuta.nishio/develop/my-todo-project/todo-yuta-web/package.json", "/Users/yuta.nishio/develop/my-todo-project/todo-yuta-web/yarn.lock", "./"]
# パッケージをインストール
RUN yarn install
# ファイルを全部作業用ディレクトリにコピー
COPY /Users/yuta.nishio/develop/my-todo-project/todo-yuta-web .
# コンテナを起動する際に実行されるコマンド
ENTRYPOINT [ "yarn", "start" ]