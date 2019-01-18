# PHP recommended staff
Packages, tools, articles, websites, tutorials, etc.,
recommended to PHP developers by [Saritasa](https://github.com/Saritasa) team.
Includes lots of frontend stuff, especially related with [VueJS](https://vuejs.org/) framework,
as we use it intensively.

## Update knowledge database
### Edit list.yaml file

Just edit **list.yaml** file and commit it to master branch. It will be published on GH Phages site automatically.

1. Edit **list.yaml** with your favorite editor to add/update knowledge base
2. Run application in development mode locally, that you didn't break anything (ex. unexpected changes to application):
   ```npm install && npm run serve```.
3. Open in browser at http://localhost:8080 and check, if your changes are visible as you expected.
4. Commit and push your changes:
  ```bash
  git add docs/list.yaml
  git commit -m "explan, what you added/changed"
  git push
  ```

## Build and run
### Run project for development

1. ```npm install``` - install all required dependencies
2. ```npm run serve``` - build application in development mode and run development HTTP server locally

Before you make pull request, make sure, that linters pass without errors or warnings:
```
npm run lint
```

Also see [other commands](https://cli.vuejs.org/guide/cli-service.html#using-the-binary), 
available with [Vue CLI](https://cli.vuejs.org/).

### Build for production
#### (when applications sources were changed)
To update SPA application, hosted on GitHub Pages:

1. ```npm install``` - install all required dependencies
2. ```npm run build``` - update files in 'docs' folder and commit them
3. ```git add docs``` - add changed result files to commit
4. ```git commit -m "explain why you changed app"``` - commit your chages
5. ```git push``` - submit changes to GitHub
