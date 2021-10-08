#!/bin/zsh

kubectl apply -f todo-yuta-web/k8s.yaml 
kubectl apply -f todo-yuta-api/k8s.yaml 
kubectl apply -f ytodo-db/k8s.yaml 

./port-forward.sh