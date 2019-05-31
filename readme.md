# issue list

- runing locally [solutions](https://github.com/firebase/firebase-tools/issues/344)
```bash
# export
export GOOGLE_APPLICATION_CREDENTIALS='/home/paul.xiao/Workspace/lab/firebase_api/functions/serviceAccountKey.json'
# check exported variabales
printenv | grep GOOGLE_APPLICATION_CREDENTIALS

# login gcloud
gcloud auth application-default login
```


# todo list
[ ] firebase serve --only functions, not able to connect db