# Sriti Audience Survey

## Publish the survey
In this repository, open **Settings → Pages**, select **Deploy from a branch**, then choose **main / root**. The public link will be:

`https://aries-d.github.io/srishti-audience-survey/`

## Connect Google Sheets
1. Open [script.new](https://script.new) while signed into the Google account that owns the response Sheet.
2. Replace the starter code with the contents of `google-apps-script/Code.gs`.
3. Run `setup` once and allow the permission prompt.
4. Deploy → New deployment → Web app. Set Execute as **Me**, Who has access **Anyone**.
5. Copy the Web app URL.
6. In `index.html`, replace `PASTE_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE` with that URL and commit the change.

Responses before the post-ideas section go to **Audience Responses**. The post-ideas responses go to **Post Ideas Responses**.
