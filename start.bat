@echo off
echo Starting Harlot Piercings Website and Sanity Studio...

REM Start the Astro frontend in a new command window
start cmd /k "cd harlot-frontend && npm run dev"

REM Start the Sanity studio in a new command window
start cmd /k "cd studio-harlot-piercing && npm run dev"

echo Both servers are starting up!
