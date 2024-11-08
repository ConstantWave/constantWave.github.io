# Constant Wave Web Page

This is the repository for the Constant Wave web page. The site is built using Jekyll, a simple, blog-aware, static site generator.

## Installation

Dependencies: 

- Ruby **3.x** (take into account that Ruby installed by default in OSX systems can be outdated). For homebrew installation, run `brew install ruby` and dont't forget `export PATH="/opt/homebrew/opt/ruby/bin:$PATH"` or `echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc` to add to bash.

To set up the project locally:

```sh
bundle install
```

## Running the Site Locally

To run the site locally, use the following command:

```sh
bundle exec jekyll serve --livereload
```
