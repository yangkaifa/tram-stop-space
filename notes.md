# Git Notes

## Initialize a repository

```bash
git init
```

Initialize the current folder as a Git repository.

## Check repository status

```bash
git status
```
Show modified, untracked, staged, and committed files.

## Add all changes

```bash
git add .
```

Add all current changes to the staging area.

## Add one file

```bash
git add notes.md
```

Add only one specified file to the staging area.

## Create a commit

```bash
git commit -m "Describe the change"
```

Save staged changes as a new version.

- `commit`: create a recorded version
- `-m`: message
- text inside quotation marks: commit description

## Configure Git author

```bash
git config --global user.name "YOUR_NAME"
git config --global user.email "YOUR_NOREPLY_EMAIL"
```

Set the default author name and email for commits on this computer.

## Connect the local repository to GitHub

```bash
git remote add origin https://github.com/USERNAME/REPOSITORY.git
```

Add a remote GitHub repository named `origin`.

## Rename the current branch

```bash
git branch -M main
```

Rename the current branch to `main`.

## Upload the project to GitHub

```bash
git push -u origin main
```

Push the local `main` branch to GitHub and create the default tracking connection.

After the first push, usually use:

```bash
git push
```

## Basic workflow

```text
Edit files
-> git status
-> git add .
-> git commit -m "Describe the change"
-> git push
...