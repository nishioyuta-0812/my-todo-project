# ベースイメージの作成
FROM node:12.16.1
# コンテナ内で作業するディレクトリを指定
WORKDIR /usr/src/app
# ファイルを全部作業用ディレクトリにコピー
COPY ../../../todo-yuta-web /usr/src/app
# package.jsonとyarn.lockを/usr/src/appにコピー
# COPY ["/Users/yuta.nishio/develop/my-todo-project/todo-yuta-web/package.json, "./"
# パッケージをインストール
RUN yarn install
# コンテナを起動する際に実行されるコマンド
ENTRYPOINT [ "yarn", "start" ]