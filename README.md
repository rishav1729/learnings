# Learn all you want

# 🔧 GitHub ↔ Local Setup Guide

---

## ✅ 1. If the GitHub Repo Already Exists (You Want to Clone It Locally)

### 🔁 Example:  
You created a repo on GitHub named `learnings` and want to work on it locally.

### 📦 Steps:

```bash
# 1. Go to the folder where you want to store the project
cd E:\learnJs  # or wherever you prefer

# 2. Clone the GitHub repo to your local machine
git clone https://github.com/rishav1729/learnings.git

# 3. Move into the cloned folder
cd learnings

# 4. Optional: check the current branch
git branch

# 5. Now you're connected — pull/push will work
git pull     # fetches latest changes
git push     # pushes your changes

```

## ✅ 2.  🚀 Pushing a Local Project to GitHub (No Repo Exists Yet)

### ✅ Scenario:
You have a local folder (e.g., `learnJs`) with files, but no GitHub repository has been created yet.

---

### 📝 Example:
You're working in `E:\learnJs` and want to push this to a new GitHub repo called `learnings`.

---

### 📦 Steps:

```bash
# 1. Initialize a local git repository
cd E:\learnJs
git init

# 2. Stage your files
git add .

# 3. Commit your changes
git commit -m "Initial commit"

# 4. Create a new repo on GitHub (e.g. rishav1729/learnings)

# 5. Add the GitHub repo as the remote origin
git remote add origin https://github.com/rishav1729/learnings.git

# 6. Set the main branch and push with tracking
git branch -M main
git push -u origin main
```
  
## ✅ 3.  If You’ve Modified Files Locally and Want to Push Updates

```
# 1. Check what’s changed
git status

# 2. Stage the changes
git add .
# or to stage specific files
git add file1.md file2.md

# 3. Commit the changes
git commit -m "Commit message"

# 4. Push the changes
git push
```


