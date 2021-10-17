#!/bin/zsh
emulate -R sh
set -e

kubectl port-forward svc/todo-yuta-web-svc 3001:3001 &
kubectl port-forward svc/todo-yuta-api-svc 3000:3000 &
kubectl port-forward svc/ytodo-db-svc 5432:5432 
