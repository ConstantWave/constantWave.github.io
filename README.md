# Constant Wave Web Page

This is the repository for the Constant Wave web page. The site is built using Jekyll, a simple, blog-aware, static site generator.

## Installation

Dependencies:

- Ruby **3.3+** (Ruby 4 works). The `github-pages` gem does not support Ruby 4, so this project uses Jekyll directly.
- [Bundler](https://bundler.io/) (`gem install bundler`)

If Homebrew Ruby is installed, make sure its `bin` directory is on your `PATH` before the system Ruby:

```sh
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
```

If you still have Ruby 2.6 from macOS and `bundle install` fails, install a current Ruby (for example `brew install ruby@3.3`) and use that version.

To set up the project locally:

```sh
bundle install
```

## Running the Site Locally

To run the site locally, use the following command:

```sh
bundle exec jekyll serve \
  --livereload \
  --force_polling \
  --config _config.yml,_config_dev.yml
```

## Scaling Screenshots

Copy the original screenshots to their folders, and then, from its directory, run:

```bash
mogrify -resize 256x *.png
```

```bash
mogrify -resize x256 *.png
```
