rm -Rf tamil/*
pushd ~/projects/tamil
uv run app.py
popd

cp -r ~/projects/tamil/build/ tamil/
rm -Rf tamil/admin/
rm -Rf tamil/videos/
