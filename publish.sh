git checkout master
git checkout -b tmp-gh-pages
rm .gitignore

npm run export

touch out/index.php
echo "<?php header( 'Location: /index.html' ) ;  ?>" >> out/index.php

git add out
git commit -am 'deploying docs'

git subtree split --prefix out -b gh-pages
git push -f origin gh-pages:gh-pages
git checkout master
git branch -D tmp-gh-pages
git branch -D gh-pages