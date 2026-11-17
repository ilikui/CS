@echo off
setlocal EnableExtensions DisableDelayedExpansion
pushd "%~dp0" || exit /b 1

git.exe rev-parse --show-toplevel >nul 2>&1
if errorlevel 1 (
    echo ERROR: This script must be inside a Git repository.
    popd
    exit /b 1
)

setlocal EnableDelayedExpansion
echo All repository changes, including new files and deletions, will be staged.
echo Review files for secrets and generated outputs before continuing.
echo No push will be performed.
echo.
echo Types: feat fix docs style refactor perf test build ci chore revert

:read_type
set "type="
set /p "type=Commit type: "
if not defined type (
    echo ERROR: Commit type is required.
    goto failed
)
set "valid="
for %%T in (feat fix docs style refactor perf test build ci chore revert) do (
    if "!type!"=="%%T" set "valid=1"
)
if not defined valid (
    echo ERROR: Choose one of the listed types.
    goto read_type
)

:read_scope
set "scope="
set /p "scope=Scope [optional, e.g. c]: "
if not defined scope goto read_description
echo(!scope!| findstr /r /x "[a-zA-Z0-9_./-][a-zA-Z0-9_./-]*" >nul
if errorlevel 1 (
    echo ERROR: Scope may contain only letters, digits, underscore, dot, slash and hyphen.
    goto read_scope
)

:read_description
set "description="
set /p "description=Short description: "
if not defined description (
    echo ERROR: Description cannot be empty.
    goto failed
)
set "nonblank=!description: =!"
if not defined nonblank (
    echo ERROR: Description cannot be empty.
    goto failed
)
set "subject=!type!: !description!"
if defined scope set "subject=!type!(!scope!): !description!"
echo.
echo Commit: !subject!

git.exe add --all
if errorlevel 1 goto failed
git.exe diff --cached --quiet --exit-code
set "diff_status=!errorlevel!"
if "!diff_status!"=="0" (
    echo Nothing to commit.
    popd
    exit /b 0
)
if not "!diff_status!"=="1" goto failed

:create_temp
set "temp_dir=!TEMP!\cs-git-!RANDOM!-!RANDOM!"
if exist "!temp_dir!" goto create_temp
mkdir "!temp_dir!"
if errorlevel 1 goto failed
set "message_file=!temp_dir!\message.txt"
for /f "tokens=2 delims=:" %%C in ('chcp') do set "original_codepage=%%C"
chcp 65001 >nul
if errorlevel 1 goto cleanup_failed
(
    echo(!subject!
    echo(
    echo Co-authored-by: Copilot ^<223556219+Copilot@users.noreply.github.com^>
) >"!message_file!"
set "write_status=!errorlevel!"
chcp !original_codepage! >nul
if not "!write_status!"=="0" goto cleanup_failed

git.exe -c i18n.commitEncoding=UTF-8 commit -F "!message_file!"
set "commit_status=!errorlevel!"
del /q "!message_file!"
rmdir "!temp_dir!"
if not "!commit_status!"=="0" goto failed
echo Local commit created. No push performed.
popd
exit /b 0

:cleanup_failed
if exist "!message_file!" del /q "!message_file!"
rmdir "!temp_dir!"

:failed
echo ERROR: Commit was not completed. Review git status; staged changes are preserved.
popd
exit /b 1