// --- Type Definitions ---
export type Language = "en" | "he";

export interface PostContent {
  title: string;
  excerpt: string;
  fullContent: string;
}

export interface Post {
  slug: string;
  date: string;
  author: string;
  readTime: string;
  content: {
    en?: PostContent;
    he?: PostContent;
  };
}

export interface PostSectionHeader {
  title: string;
  subtitle: string;
}

export const postSectionHeader: PostSectionHeader = {
  title: "From the Playbook",
  subtitle:
    "Breaking down the X's and O's of software development, team strategy, and high-performance engineering. Oh and Basketball!",
};

export const flexibleBlogPosts: Post[] = [
  {
    slug: "antigravity-mcp-guide",
    date: "Jan 17, 2026",
    readTime: "5 min read",
    author: "Moshe Gotam",
    content: {
      en: {
        title: "Unlock the Power of Antigravity: The Ultimate MCP Guide",
        excerpt:
          "Discover how Antigravity with MCP (Model Context Protocol) revolutionizes your development workflow. Learn best practices, why it's a game-changer, and how to harness its full potential.",
        fullContent: `
                <h2 class="text-white text-2xl font-bold mt-8 mb-4">Introduction to Antigravity</h2>
                <p class="mb-4">In the rapidly evolving landscape of AI-assisted development, <strong>Antigravity</strong> stands out as a powerful agentic coding assistant. But what truly supercharges its capabilities is the <strong>Model Context Protocol (MCP)</strong>. This standard allows Antigravity to connect seamlessly with external tools, servers, and data sources, transforming it from a smart chat bot into a comprehensive engineering partner.</p>

                <h2 class="text-white text-2xl font-bold mt-8 mb-4">Why Use Antigravity MCP?</h2>
                <p class="mb-4">The "Why" is simple: <strong>Context and Action</strong>. Traditional AI models are limited by what they know. Antigravity MCP breaks these walls by giving the AI access to:</p>
                <ul class="list-disc pl-5 mb-4 text-gray-300">
                    <li class="mb-2"><strong>Live Data Sources:</strong> Connect to databases, Notion, or internal APIs.</li>
                    <li class="mb-2"><strong>Specialized Tools:</strong> Run terminal commands, manage files, or deploy code directly.</li>
                    <li class="mb-2"><strong>Custom Workflows:</strong> Define specific paths for complex tasks that the AI can execute autonomously.</li>
                </ul>

                <h2 class="text-white text-2xl font-bold mt-8 mb-4">How to Use Antigravity</h2>
                <p class="mb-4">Getting started is intuitive, but mastering it requires understanding its agentic nature.</p>
                <h3 class="text-white text-xl font-bold mt-6 mb-4">1. The "Task Boundary" Concept</h3>
                <p class="mb-4">Antigravity works best when you define clear tasks. Unlike a simple Q&A bot, it thrives on structured workflows. Use the task system to define a goal (e.g., "Refactor the Auth Module"), and let it break that down into planning, execution, and verification phases.</p>

                <h3 class="text-white text-xl font-bold mt-6 mb-4">2. Leveraging Tools</h3>
                <p class="mb-4">Don't just ask for code; ask for <em>actions</em>. "Check the server logs," "Analyze the database schema," or "Create a new component." Antigravity uses its MCP tools to actually perform these actions, giving you results based on reality, not hallucination.</p>

                <h2 class="text-white text-2xl font-bold mt-8 mb-4">Best Practices</h2>
                <blockquote class="border-l-4 border-orange-500 pl-4 italic my-4"><p>💡 Pro Tip: Treat Antigravity like a junior engineer. Give clear requirements, ask for a plan first, and verify the output.</p></blockquote>
                <p class="mb-4"><strong>Iterative Development:</strong> Start with a plan. Ask Antigravity to "Create an implementation plan" before writing a single line of code. This ensures you're aligned on the architecture and prevents wasted effort.</p>
                <p class="mb-4"><strong>Context is King:</strong> When starting a new task, ensure Antigravity has access to the relevant files. While it's smart, pointing it to the right directory or file (using <code>@file</code> references) speeds up its understanding significantly.</p>

                <h2 class="text-white text-2xl font-bold mt-8 mb-4">Conclusion</h2>
                <p class="mb-4">Antigravity with MCP isn't just a tool; it's a force multiplier. By integrating directly with your environment and enabling structured, agentic workflows, it allows you to build faster, smarter, and with greater confidence. Welcome to the future of coding.</p>
            `,
      },
      he: {
        title: "כוחה של שליטה: המדריך המלא ל-Antigravity MCP",
        excerpt:
          "גלו כיצד Antigravity בעזרת פרוטוקול MCP משנה את חוקי המשחק בפיתוח תוכנה. למדו על השיטות המומלצות, למה זה כלי חובה, ואיך להפיק ממנו את המקסימום.",
        fullContent: `
                <h2 class="text-white text-2xl font-bold mt-8 mb-4">היכרות עם Antigravity</h2>
                <p class="mb-4">בעולם הפיתוח המואץ של היום, <strong>Antigravity</strong> בולטת כסייעת פיתוח עוצמתית. אך מה שבאמת הופך אותה למיוחדת הוא השימוש ב-<strong>Model Context Protocol (MCP)</strong>. תקן זה מאפשר ל-Antigravity להתחבר בצורה חלקה לכלים חיצוניים, שרתים ומקורות מידע, והופך אותה מצ'אטבוט חכם לשותפה הנדסית מלאה.</p>

                <h2 class="text-white text-2xl font-bold mt-8 mb-4">למה להשתמש בזה?</h2>
                <p class="mb-4">התשובה פשוטה: <strong>הקשר ופעולה</strong>. מודלים מסורתיים מוגבלים למה שהם אומנו עליו. Antigravity שוברת את הגבולות האלו:</p>
                <ul class="list-disc pl-5 mb-4 text-gray-300">
                    <li class="mb-2"><strong>מקורות מידע חיים:</strong> חיבור למסדי נתונים, Notion, או APIs פנימיים.</li>
                    <li class="mb-2"><strong>כלים ייעודיים:</strong> הרצת פקודות טרמינל, ניהול קבצים, ופריסת קוד ישירות.</li>
                    <li class="mb-2"><strong>תהליכים מותאמים אישית:</strong> הגדרת נתיבי עבודה מורכבים שה-AI יכולה לבצע באופן אוטונומי.</li>
                </ul>

                <h2 class="text-white text-2xl font-bold mt-8 mb-4">איך להשתמש ב-Antigravity</h2>
                <h3 class="text-white text-xl font-bold mt-6 mb-4">1. תכנון משימות</h3>
                <p class="mb-4">Antigravity עובדת הכי טוב כשיש לה משימות מוגדרות. השתמשו בכלי ניהול המשימות כדי להגדיר יעדים ברורים, ותנו לה לפרק אותם לשלבי תכנון, ביצוע ואימות.</p>

                <h3 class="text-white text-xl font-bold mt-6 mb-4">2. מינוף כלים</h3>
                <p class="mb-4">אל תבקשו רק קוד; בקשו <em>פעולות</em>. "בדוק את הלוגים בשרת", "נתח את הסכמה", או "צור קומפוננטה חדשה".</p>

                <h2 class="text-white text-2xl font-bold mt-8 mb-4">סיכום</h2>
                <p class="mb-4">Antigravity עם MCP היא מכפיל כוח. על ידי אינטגרציה ישירה לסביבת העבודה שלכם, היא מאפשרת לכם לבנות מהר יותר, חכם יותר, ועם ביטחון רב יותר.</p>
            `,
      },
    },
  },
  {
    slug: "paris-team-spirit",
    date: "Oct 23, 2025",
    readTime: "7 min read",
    author: "Moshe Gotam",
    content: {
      he: {
        title: "מכונת הכדורסל מפריז",
        excerpt: "כשהשיטה חזקה יותר מכל מאמן ושחקן.",
        fullContent: `
                <p class="mb-2">תשכחו מהלובר; הפלא האדריכלי החדש בפריז הוא שיטת כדורסל. השבוע, בבלגרד, התוכנית הזו עמדה במבחן בסביבה העוינת ביותר באירופה. מול 20,000 אוהדי פרטיזן שואגים, המבנה הפריזאי לא רק החזיק מעמד – הוא שלט. הניצחון 83-101 היה יותר מסתם עוד 'W' בעמודת הניצחונות; הוא היה הצהרה.</p>
                <p class="mb-2">ההצהרה היא זו: הארכיטקטורה של המועדון עצמה היא הכוכב.</p>
                <p class="mb-2">מדוע הניצחון הזה כל כך משמעותי? מכיוון שהוא הגיע עם מאמן חדש לחלוטין על הקווים וסגל שעבר מהפכה בקיץ. זו ההוכחה הניצחת שה"בלופרינט" (תוכנית האב) הפריזאי גדול מסך חלקיו. הוא שורד עזיבה של כוכבים, והוא שורד עזיבה של המאמנים שבנו אותו.</p>
                <p class="mb-2">והם אכן עוזבים. ההצלחה של התוכנית הזו לא נמדדת רק בנקודות, אלא ביוקרה של האדריכלים שלה. רק השבוע קיבלנו הוכחה נוספת לכך, כאשר המאמן הראשי הקודם, טיאגו ספליטר, נחטף לתפקיד ב-NBA. הוא לא הראשון. ספליטר הולך בעקבות קודמו, תומאס איסלו, שהצטרף לגריזליס. פריז היא כבר לא "פרויקט"; היא בית חרושת למאמני NBA.</p>
                <p class="mb-2">כשהשיטה שלך גם מנצחת בבלגרד וגם מייצאת את המוחות שלה לליגה הטובה בעולם, אתה חייב לשאול: מהי לעזאזל התוכנית הזו, ואיך בנו אותה?</p>
                <h2 class="text-white text-2xl font-bold mt-8 mb-4">שלב א׳ (פראט) - או בניית הזהות ההגנתית</h2>
                <p class="mb-4">בקיץ 2018, כשפריז כולה עוד ליקקה את פצעי ההדחה הכואבת מליגת האלופות מול ריאל מדריד (שהתרחשה במרץ, למרות החתמות הענק של ניימאר ואמבפה בקיץ הקודם), פרויקט "אדריכלי" מסוג אחר לחלוטין החל לקרום עור וגידים בעיר. הרחק ממודל "גלאקטיקוס"  ומהרעש התקשורתי של פ.ס.ז', איש NBA ותיק בשם דיוויד קאן (כן, כן ההוא שפספס את סטף קרי) לחץ 'התחל' על תוכנית סבלנית ושיטתית. הוא דיבר על "פרויקט ארוך טווח". עם תקציב ממוצע של כ-2 מיליון אירו ומטרה אחת ברורה – להגיע ליורוליג עד 2022 – קאן הניח את אבן הפינה הראשונה. זו לא הייתה בנייה של קבוצת כוכבים; זו הייתה התחלה של בניית "שיטה".</p>
                <p class="mb-4">בשלוש השנים הראשונות האיש למשימה ז'אן-כריסטוף "ג'יי.סי" פראט, מאמן צרפתי ותיק ומוערך, שחי ונושם את "תרבות הכדורסל הצרפתית". במשך 154 משחקים על הקווים פראט בנה את הזהות הקבוצה מההגנה. הוא התפרסם בזכות שיטה קפדנית, דורשנית, והתמקדות אובססיבית בפרטים, במיוחד בהגנה על הפיק-אנד-רול. שחקנים מרכזיים שהובילו היו 2 שחקנים צעירים - איסמעיל קמאגטה וג'והאן בגארין אשר קיבלו את ה"רישיון לטעות" ולהתפתח. ב-2021 הקבוצה השלימה את המשימה הראשונה ועלתה ל-Pro A, הליגה הצרפתית הבכירה.</p>
                <h3 class="text-white text-xl font-bold mt-6 mb-4">שלב ב׳ (וויבר) - או מודרניזציה וניחוחות סגנון NBA</h3>
                <p class="mb-4">לאחר השלמת עונה ראשונה בליגה הצרפתית הבכירה הגיעה המינוי של וויל וויבר בקיץ 2022, מינוי זה היה הצהרת כוונות אסטרטגית. וויבר לא נבחר רק כדי לאמן משחקים; הוא נבחר כדי לשמש כ"אדריכל" של "שלב המודרניזציה" – מאמץ מרוכז להטמיע תרבות, פילוסופיה וזהות טקטית בסגנון NBA. הוא הביא איתו הרבה מוטיבים "מודרנים" של הכדורסל לקבוצה - בליבת המנדט של וויבר עמדה תזה ברורה: "ורסטיליות". זו לא הייתה סיסמה ריקה, אלא עיקרון מנחה לבניית הסגל ולהגדרת האסטרטגיה על המגרש. ביחד לעוגן הצעיר צורפו קייל אולמן, אמיר סימס והניסיון של ג'רמי אוונס.</p>
                <p class="mb-4">הטקטיקה של וויבר, שהוכיחה אתה עצמה ב-2016 עם אליפות ליגת המשנה של ה-NBA ותואר מאמן העונה, שכללה הגנה "אגרסיבית", שמירה על בסיס "החלפות" שבה הקבוצה מתוך ביטחון שהאתלטיות של הסגל, מסוגלת להתמודד עם המצבים הללו. בהתקפה במקום מערכת מבוססת-תרגילים (Set-Plays) אירופאית , וויבר הנחיל עקרונות NBA של "קצב וריווח" (Pace and Space). הוא עבר למערכי "5-בחוץ" ו-"4-בחוץ, 1-בפנים" , שהדגישו קבלת החלטות חופשית של שחקנים ויצירה אישית, ולא ביצוע תרגילים נוקשה או במילים פשוטות ״ראן אנד גאן״.</p>
                <p class="mb-2">השינוי הארגוני עמד למבחן בעונה בה פריז התמודדה לראשונה ביורוקאפ, את שלב הבתים סיימה עם מאזן של 10 נצחונות מתוך 18 משחקים ומקום רביעי. לאחר ניצחון מרשים בשמינית גמר, פריז עלתה לרבע גמר מול גראן קנריה, מבחן אשר לא צלחה בלשון המעטה, תבוסה צורמת של 30 נקודות מול הקבוצה שבסוף התבררה כאלופת הטורניר.</p>
                <h2 class="text-white text-2xl font-bold mt-8 mb-4">Conclusion</h2>
                <p class="mb-4">Docker has revolutionized development by solving the age-old problem of "it works on my machine." Its containerization approach offers a perfect balance between isolation and resource efficiency, making it an invaluable tool for modern development workflows.</p>
            `,
      },
    },
  },
  {
    slug: "the-maryland-chameleon",
    date: "Oct 20, 2025",
    readTime: "15 min read",
    author: "Moshe Gotam",
    content: {
      he: {
        title: "הזיקית ממרילנד",
        excerpt:
          "הדינמיקה בקבוצת ספורט בוחנת את אופי השחקן. האם נולדת להוביל, להיות ה'באטמן' של הקבוצה? או שאתה 'רובין', השותף האולטימטיבי שמאפשר לכוכב לזהור? או בכלל משהו היברידי באמצע",
        fullContent: `<p class="mb-4">הדינמיקה בקבוצת ספורט בוחנת את אופי השחקן. האם נולדת להוביל, להיות ה"באטמן" של הקבוצה? או שאתה "רובין", השותף האולטימטיבי שמאפשר לכוכב לזהור? אבל אולי השאלה צריכה להיות אחרת: האם נדרש גם שחקן מסוג אחר, כזה שיכול לבחור את הדמות בהתאם לסיטואציה, שחקן שהוא גם באטמן כשצריך לקחת אחריות, וגם רובין כשהקבוצה דורשת ממנו להיות משלים.</p>
<p class="mb-4">השאלה הזו מכוונת ישירות לג'ף דאוטין. אז מי אתה באמת? מוביל, משלים, או הזיקית שיודעת להיות שניהם?</p>
<figure class="my-8">
  <div class="h-130 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 overflow-hidden">
    <img
      class="w-full h-full object-cover rounded-lg border-gray-700 border-4"
      src="/blog-post/the-maryland-chameleon/robin_batman.png"
      alt="Batman and Robin standing together" />
  </div>
  <figcaption class="text-center text-sm text-gray-400 mt-2">באטמן ורובין: הדינמיקה שמגדירה קריירות</figcaption>
</figure>
<p class="mb-4">כדי לענות על זה, חייבים לחזור להתחלה. המסע של דאוטין הוא סיפור על הסתגלות, והוא זה שמגדיר אותו.</p>
<h3 class="text-white text-2xl font-bold mt-8 mb-4">הרבע הראשון - או ילדות</h3>
<p class="mb-4">ג'ף דאוטין הבן, יליד 1997, נולד באפר מארלבורו, מרילנד. הוא נולד באזור ה-DMV, סביבה הידועה בתחרותיות קיצונית ובייצור בלתי פוסק של כישרונות NBA, המחייבת שחקנים צעירים להגדיר את עצמם מגיל מוקדם. כדי להבין עד כמה האיזור הזה הוא איזור של כדורסל ניתן רק לבחון רשימה קצרה של שחקנים שיצאו ממנו בשנים האחרונות - קווין דוראנט, כרמלו אנתוני, ויקטור אולדיפו, אנג'ל ריס, רודי גיי ועוד.</p>
<p class="mb-4">בנוסף לילדות באיזור בו הכדורסל ברמה גבוהה כל כך, דאוטין גם לא הלך לתיכון ציבורי רגיל, אלא ל-St. John's College High School, שמשחקת ב-WCAC – ליגת התיכונים הקתולית, הלידה שנחשבת לאחת מהקשות ביותר בארצות הברית. זו ליגה שבה כל ערב עלול לפגוש שחקן NBA בפוטנציה. כשדאוטין שיחק, ה"באטמן" הבלתי מעורער של הליגה היה מפלצת אתלטית בשם מרקל פולץ' מדימאת'ה - הבחירה מספר 1 בדראפט 2017.</p>
<p class="mb-4">אבל כאן מגיעה הנקודה הנוקבת, הרגע המכונן שבו ה"זיקית" החלה להתפתח. דאוטין אפילו לא היה ה"באטמן" בקבוצה שלו. הוא חלק את הקו האחורי עם אנתוני קוואן ג'וניור, הכוכב המקומי הכריזמטי שסומן כ"באטמן".</p>
<p class="mb-4">במקום להיכנע לתבנית הדו-קוטבית של "באטמן או רובין", דאוטין נאלץ לפתח סט כישורים שלישי, מורכב בהרבה: הסתגלות אקטיבית. הוא לא היה "רובין" פסיבי שחי בצילו של הכוכב; הוא היה עשה הכל כדי להשיג את המטרה – ניצחון.</p>
<p class="mb-4">מול קוואן הדומיננטי, הוא שינה את משחקו: הוא הפך לשומר הקשוח, לשחקן השקול, לדבק שמחבר את הקבוצה. זו לא הייתה קבלה של תפקיד מספר 2, אלא הבנה עמוקה של הסיטואציה ובחירה אסטרטגית במה שהקבוצה צריכה. יחד, כשהוא מתאים את עצמו, הם הובילו את התיכון ב-2016 לתואר (ראשון מאז 2000).</p>
<p class="mb-4">הוא סיים את השנה האחרונה עם ממוצע של 15 נק', 5 אס', דירוג של 3 כוכבים וחוזה ברוד איילנד – נתונים שאינם של "באטמן" טהור או "רובין" קלאסי, אלא של שחקן שכבר אז הבין איך להיות מה שהקבוצה צריכה כדי לנצח.</p>
<h3 class="text-white text-2xl font-bold mt-8 mb-4">הרבע השני - או הקולג'</h3>
<p class="mb-4">כש"הרבע הראשון" הסתיים, ג'ף דאוטין סיים את התיכון לאחר שהפגין יכולת להיות האופציה השנייה, יכולת זו הייתה רק "צבע" אחד. כעת, הוא היה צריך לבחור מכללה.</p>
<p class="mb-4">הבחירה שלו הגדירה את כל הנרטיב: לאחרת קבלת דירוג 3 כוכבים הוא לא הלך למכללה גדולה כמו מרילנד, הוא הגיע אל אוניברסיטת רוד איילנד (URI) – כאשר אתה לא מגיע בדלת הראשית אתה נדרש להתאים את עצמך לסיטואציה.</p>
<p class="mb-4">כהרגלו, ההתאקלמות הייתה תהליך. בעונתו השנייה (2017-18), הוא כבר ביסס את עצמו כמנוע של הקבוצה: הוא קפץ לכמעט 10 נקודות ו-5.6 אסיסטים למשחק. הם הגיעו לטורניר ה-NCAA, שם הדהימו את אוקלהומה של טריי יאנג. גם בהפסד בסיבוב השני לדיוק הגדולה, דאוטין הראה את ה-IQ שלו כמנהל משחק, כשסיים עם 9 אסיסטים.</p>
<p class="mb-4">אז הגיע הוואקום. בקיץ 2018, הקבוצה התפרקה. הסקוררים המובילים סיימו את לימודיהם והמאמן עזב. זו הייתה שנת המבחן האולטימטיבית של להוכיח את היכולות להתאים אל הסיטואציה. הקבוצה איבדה את כוח האש המרכזי שלה, ודאוטין נאלץ לשנות את צבעו באופן דרסטי.</p>
<p class="mb-4">המהפך היה מיידי וקיצוני. בעונתו השלישית, ממוצע הנקודות שלו זינק בכ-60% ל-15.3 למשחק. הנתון המעניין הוא דווקא ירידת האסיסטים (ל-3.7). זו לא הייתה "בחירה" להפוך ל"באטמן", אלא התאמה כפויה למציאות חדשה. הקבוצה הייתה צריכה נקודות כדי לשרוד, ודאוטין – ביצע את ההתאמות והפך לסקורר כי זה מה שהמצב דרש ממנו.</p>
<p class="mb-4">אז הגיע הוואקום. בקיץ 2018, הקבוצה התפרקה. הסקוררים המובילים סיימו את לימודיהם והמאמן עזב. זו הייתה שנת המבחן האולטימטיבית של להוכיח את היכולות להתאים אל הסיטואציה. הקבוצה איבדה את כוח האש המרכזי שלה, ודאוטין נאלץ לשנות את צבעו באופן דרסטי.</p>
<p class="mb-4">בשנתו הרביעית והאחרונה, כשהסגל התייצב, דאוטין הוכיח שוב את יכולת ההסתגלות שלו וחזר להתמקד בניהול משחק בוגר. הוא נבחר לחמישייה השלישית בליגה, אבל הנתון המדהים באמת היה יחס האסיסטים-איבודים שלו: 2.82 ל-1, דירוג 15# בכל ארה"ב.</p>
<p class="mb-4">הנתון הזה לא היה מקרי. הוא היה הוכחה לאינטליגנציה יוצאת דופן – אותה אינטליגנציה שבאה לידי ביטוי גם מחוץ למגרש עם ממוצע 3.52 וזכייה בפרס <strong>"אלברט לבוף"</strong> לספורטאי-סטודנט המצטיין ב-2020, שלוש שנים לאחר חסן מרטין מחולון.</p>
<p class="mb-4">דאוטין סיים את המכללות מבלי שניתן היה להגדיר אותו בתבנית אחת. הוא הוכיח שהוא שחקן בעל הבנת משחק עמוקה, המאפשרת לו לזהות חולשות אצל היריב ולהתאים את תפקודו לדרישות הקבוצה. ערכו לא נמדד בתפקיד קבוע, אלא ביכולת ההסתגלות הטקטית הגבוהה שלו מרגע לרגע.</p>
<h3 class="text-white text-2xl font-bold mt-8 mb-4">מחצית - או ליל הדראפט</h3>
<p class="mb-4">"הרבע השני" הסתיים כשדאוטין סיים קריירת מכללות מרשימה, זוכה פרסים אקדמיים ומוכן לנסות את מזלו ב-NBA. ואז הגיעה שריקת המחצית – ליל הדראפט של 2020. 60 שמות הוקראו, ושמו של ג'ף דאוטין לא היה ביניהם. הוא היה "Undrafted"</p>
<p class="mb-4">כאן דאוטין נתקל במציאות המקצועית הקשוחה של ה-NBA. זו לא הייתה שאלה של "באטמן" או "רובין"; זו הייתה שאלה של התאמה. 30 קבוצות ויתרו עליו, והשאלה המתבקשת היא מדוע.</p>
<p class="mb-4">האם ה"זיקית" הוורסטילית נתפסה כמי שחסרה "כלי נשק" אבסולוטי אחד? האם האתלטיות שלו לא הרשימה? האם הקליעה מבחוץ לא הייתה מספיק עקבית כדי לתרגם לליגה של הגדולים? סקאוטים רבים תייגו אותו כנראה כשחקן אשר חכם וטוב מדי לליגות המשנה, אבל לא מספיק מיוחד (Specialist) עבור ה-NBA.</p>
<p class="mb-4">המצב הסתבך עקב מגפת הקורונה, שביטלה את ליגת הקיץ של 2020 ולקחה מדאוטין את ההזדמנות המיידית להוכיח לסקאוטים שהם טעו. בהזדמנות היחידה שקיבל – חוזה "Exhibit 10" (חוזה מחנה אימונים לא מובטח) עם אורלנדו מג'יק – הוא נופה מיד. החוזה המקצועי האמיתי הראשון שלו לא היה בליגה של הגדולים, אלא כרטיס בכיוון אחד ישירות לליגת הפיתוח. המשחק השתנה לגמרי.</p>
<figure class="my-8">
  <div class="h-130 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 overflow-hidden">
    <img
      class="w-full h-full object-cover rounded-lg border-gray-700 border-4"
      src="/blog-post/the-maryland-chameleon/dowtin_undrafted.png"
      alt="Dowtin and Undrafted standing together" />
  </div>
  <figcaption class="text-center text-sm text-gray-400 mt-2">דאוטין בליל הדראפט</figcaption>
</figure>
<h3 class="text-white text-2xl font-bold mt-8 mb-4">הרבע השלישי - או ה-NBA</h3>
<p class="mb-4">עבור רוב השחקנים חוזה בליגת הפיתוח, זוהי תחנה אחרונה לפני הנפילה לאירופה או לשכחה. עבור דאוטין, זו הפכה להיות המעבדה הפרטית שלו ל"פיצול אישיות מקצועי".</p>
<p class="mb-4">במשך ארבע שנים (2020-2024), דאוטין חי חיים כפולים:</p>
<p class="mb-4">1. ה"באטמן" של ה-G League: כשהוא לבש את המדים של לייקלנד מג'יק, דלאוור בלו קואוטס או ראפטורס 905, דאוטין חזר להיות "האיש". הוא היה הרכז הפותח, הסקורר המוביל, והמוח על המגרש. הוא נתן באופן קבוע משחקים של 20+ נקודות ו-6+ אסיסטים, הוכיח לילה אחר לילה שהוא טוב מדי עבור הליגה הזו.</p>
<p class="mb-4">2. ה"רובין" של ה-NBA: ההצטיינות הזו ב-G League לא זיכתה אותו בחוזה NBA מובטח, אלא בסדרה אינסופית של חוזים ל-10 ימים וחוזים דו-כיווניים. ב-NBA, רוב הזמן הוא נדרש לחזור לזהות ה"רובין" המוכרת שלו: להיות "מבוגר אחראי", לא לטעות ולשמור חזק.</p>
<p class="mb-4">אבל מדי פעם, כשההזדמנות נקרתה בדרכו, ה"באטמן" של ה-G League הגיח לפני השטח.</p>
<p class="mb-4">דוגמאות בולטת מתפרסות לאורך השנים בטורונטו. לקראת סוף עונת 2022-23, במשחק קריטי עבור הראפטורס במירוץ לפליי-אין, דאוטין קיבל את המפתחות וסיפק את משחק חייו ב-NBA: שיא קריירה של 22 נקודות, 7 אסיסטים ו-3 חטיפות בניצחון על מילווקי. באורלנדו קלע סל ניצחון נגד בוסטון במשחק קדם עונה.</p>
<p class="mb-4">במשך ארבע שנים הוא היה כלוא ב"לופ" הזה: שחקן-על ברמה אחת, שחקן משלים יעיל ברמה שמעל, שלעיתים רחוקות מקבל הזדמנות להראות שהוא יכול להיות יותר. ה"רבע השלישי" הסתיים כשהוא הבין שכדי לאחד מחדש את שתי הזהויות, הוא חייב לשנות אווירה.</p>
<h3 class="text-white text-2xl font-bold mt-8 mb-4">הרבע הרביעי - או אירופה</h3>
<p class="mb-4">"הרבע השלישי" הסתיים כשהוא הבין שהוא תקוע. בגיל 28, ג'ף דאוטין כבר לא היה "פרוספקט". הוא הוכיח שהוא "באטמן" ב-G League, אבל ה-NBA תייג אותו סופית כ"רובין" אולטימטיבי, ה-"Backdoor Guy" המושלם לסוף הספסל. כדי לאחד את שתי הזהויות, הוא היה חייב לעזוב את המערכת האמריקאית.</p>
<p class="mb-4">ההחתמה שלו היא הימור מחושב של עודד קטש, כפי שהסביר המאמן בעצמו: "ג'ף שחקן עם פוטנציאל גדול. מדובר באתלט שיודע לייצר מצבי קליעה לו ולאחרים, ובעל אינטליגנציית משחק שתעזור לו להשתלב בכדורסל האירופאי".</p>
<p class="mb-4">הניתוח של קטש הוא הגדרת המילון למה שמכבי צריכה. בקו אחורי צפוף שכולל סקורר-על בדמותו של לוני ווקר הרביעי, מוסר טהור - תמיר בלאט, וג'ימי קלארק שמשמש כ"פועל שחור" הגנתי – התפקיד של דאוטין הוא להיות לעשות הכל מהכל:</p>
<p class="mb-4"><strong>"לייצר מצבי קליעה... לאחרים":</strong> כשהוא על המגרש ליד לוני ווקר, דאוטין לוקח כביכול צעד אחורה. הוא יהפוך ל-"Backdoor Guy", ירווח את המשחק, ישמור על הגארד הקטלני של היריבה ויוביל את הכדור כדי לבצע את המסירה הנכונה.</p>
<p class="mb-4"><strong>"לייצר מצבי קליעה לו"</strong>: כשווקר על הספסל ודאוטין משחק ליד בלאט, הציפייה מתהפכת. הוא חייב להפעיל את "Big Game Dowtin", להפוך לסקורר, לתקוף את הסל וליצור נקודות כדי להוביל את היחידה השנייה.</p>
<p class="mb-4">כבר ב2 מקרים בשבועיים האחרונים הוא נכנס ל"זון" מטורף - ברבע הרביעי של 11 נק רצופות מול אולי' ו9 מול הפועל, במקרה אחד זה הספיק לניצחון ובשני לא. "הרבע הרביעי" בקריירה של דאוטין הוא המבחן האולטימטיבי. אחרי קריירה שלמה של פיצול אישיות כפוי בין שתי ליגות (NBA ו-G League), מכבי תל אביב דורשת ממנו, בפעם הראשונה, להיות הזיקית גם "באטמן" וגם "רובין" באותו ערב. זו כבר לא הישרדות; זו דרישה למצוינות. והתשובה לשאלה הזו יכולה להיות הכי חשובה לעונת היורוליג של מכבי.</p>
<figure class="my-8">
  <div class="h-130 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 overflow-hidden">
    <img
      class="w-full h-full object-cover rounded-lg border-gray-700 border-4"
      src="/blog-post/the-maryland-chameleon/simpsons_career.png"
      alt="Dowtin Career" />
  </div>
  <figcaption class="text-center text-sm text-gray-400 mt-2">דאוטין במהלך האחרון (?)</figcaption>
</figure>

<h3 class="text-white text-2xl font-bold mt-8 mb-4">זריקה על הבאזר</h3>
<p class="mb-4">ארבעת הרבעים של הקריירה האמריקאית של דאוטין הסתיימו. המעבר למכבי תל אביב הוא לא עוד "רבע" – הוא יכול להיות זריקת הניצחון על הבאזר.</p>
<p class="mb-4">כל הדיון התיאורטי על "זיקית", "באטמן" ו"רובין" מתנקז כעת למבחן תוצאה אחד: האם הגמישות שהפגין היא נשק התקפי מנצח, או שהיא הייתה בסך הכל מנגנון הישרדות של שחקן משלים?</p>
<p class="mb-4">משחק אחד הסתיים בנצחון ומשחק אחר הסתיים בהפסד, העונה הזו היא השורה התחתונה. היא תקבע אם ה"זיקית" היא אכן האבולוציה של שחקן מודרני, או שזהו פשוט כינוי מנומס לשחקן שלא היה מספיק דומיננטי כדי להיות כוכב, ולא מספיק יציב כדי להיות שחקן משלים בכיר. הכדור בדרך לסל; האוהדים בתקווה יחכו בהיכל, עוצרים את נשימתם. </p>
`,
      },
    },
  },
  {
    slug: "what-is-docker",
    date: "Oct 21, 2025",
    readTime: "7 min read",
    author: "Moshe Gotam",
    content: {
      en: {
        title: "What is Docker? Understanding the Container Revolution",
        excerpt:
          "Have you ever wished you could package your entire application, along with its environment, dependencies, and configuration, into a single, portable unit that runs exactly the same way everywhere? That's what Docker does.",
        fullContent: `
                <h2 class="text-white text-2xl font-bold mt-8 mb-4">Introduction</h2>
                <p class="mb-4">Have you ever wished you could package your entire application, along with its environment, dependencies, and configuration, into a single, portable unit that runs exactly the same way everywhere? That's exactly what Docker does. As someone who's deployed hundreds of applications across different environments, I can tell you that Docker has fundamentally changed how we develop and deploy software.</p>
                <h2 class="text-white text-2xl font-bold mt-8 mb-4">Understanding Docker and Containerization</h2>
                <p class="mb-4">Docker is an open-source platform that automates the deployment of applications inside lightweight, portable containers. Think of a container as a standardized box that can hold everything your application needs to run – code, runtime, system tools, libraries, and settings.</p>
                <h3 class="text-white text-xl font-bold mt-6 mb-4">Containerization vs. Virtualization: Understanding the Difference</h3>
                <p class="mb-4">Let's break down the key differences with a practical example:</p>
                <p class="mb-4"><strong>Traditional Virtualization (Virtual Machines):</strong></p>
                <pre class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto"><code class="language-text">Hardware Infrastructure
└── Host Operating System
    ├── Hypervisor
    │   ├── VM 1 (Full OS + Libraries + App 1)
    │   ├── VM 2 (Full OS + Libraries + App 2)
    │   └── VM 3 (Full OS + Libraries + App 3)
</code></pre>
                <p class="mb-4"><strong>Docker Containerization:</strong></p>
                <pre class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto"><code class="language-text">Hardware Infrastructure
└── Host Operating System
    ├── Docker Engine
    │   ├── Container 1 (Libraries + App 1)
    │   ├── Container 2 (Libraries + App 2)
    │   └── Container 3 (Libraries + App 3)
</code></pre>
                <blockquote class="border-l-4 border-orange-500 pl-4 italic my-4"><p>💡 Pro Tip: While VMs typically take minutes to start, Docker containers can start in seconds because they don't need to boot an entire OS.</p></blockquote>
                <h2 class="text-white text-2xl font-bold mt-8 mb-4">Key Benefits of Using Docker for Development</h2>
                <h3 class="text-white text-xl font-bold mt-6 mb-4">1. Consistency Across Environments</h3>
                <pre class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto"><code class="language-yaml"># docker-compose.yml example
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
  database:
    image: postgres:13
</code></pre>
                <h3 class="text-white text-xl font-bold mt-6 mb-4">2. Rapid Development Cycle</h3>
                <pre class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto"><code class="language-bash"># Quick Start
docker-compose up

# Easy Cleanup
docker-compose down --volumes
</code></pre>
                <h3 class="text-white text-xl font-bold mt-6 mb-4">3. Simplified Dependency Management</h3>
                <pre class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto"><code class="language-dockerfile">FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
</code></pre>
                <h2 class="text-white text-2xl font-bold mt-8 mb-4">Conclusion</h2>
                <p class="mb-4">Docker has revolutionized development by solving the age-old problem of "it works on my machine." Its containerization approach offers a perfect balance between isolation and resource efficiency, making it an invaluable tool for modern development workflows.</p>
            `,
      },
    },
  },
  {
    slug: "antigravity-mcp-guide",
    date: "Jan 17, 2026",
    readTime: "8 min read",
    author: "Moshe Gotam",
    content: {
      en: {
        title: "Antigravity & MCP: The Future of Agentic Engineering",
        excerpt:
          "Unlock the true potential of AI with the Model Context Protocol. A deep dive into agentic workflows, real-world examples, and how to turn a chatbot into a senior engineer.",
        fullContent: `
                <h2 class="text-white text-2xl font-bold mt-8 mb-4">Beyond the Chatbot</h2>
                <p class="mb-4">We've all been there: pasting code into a chat window, getting a fix, pasting it back, and realizing it broke something else. It's the "Copy-Paste Cycle of Doom." <strong>Antigravity</strong>, powered by the <strong>Model Context Protocol (MCP)</strong>, breaks this cycle by moving the AI <em>inside</em> your environment.</p>

                <figure class="my-8">
                  <div class="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-2xl">
                    <img
                      class="w-full h-auto object-cover"
                      src="/blog-post/antigravity-mcp-guide/mcp_diagram.png"
                      alt="Diagram showing Antigravity connecting to Database, Terminal, and Filesystem via MCP"
                    />
                  </div>
                  <figcaption class="text-center text-sm text-gray-400 mt-2">The Antigravity Architecture: A central core connected to your local tools.</figcaption>
                </figure>

                <h2 class="text-white text-2xl font-bold mt-8 mb-4">What is MCP?</h2>
                <p class="mb-4">The <strong>Model Context Protocol</strong> is an open standard that lets AI models "plug in" to data and tools. Think of it like USB-C for AI. Instead of just "reading" text, Antigravity can now:</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div class="bg-[#1F2937] p-4 rounded-lg border border-gray-700">
                        <h4 class="text-orange-400 font-bold mb-2">👁️ See</h4>
                        <p class="text-sm text-gray-300">Read file contents, directory structures, and database schemas directly.</p>
                    </div>
                    <div class="bg-[#1F2937] p-4 rounded-lg border border-gray-700">
                        <h4 class="text-orange-400 font-bold mb-2">⚡ Act</h4>
                        <p class="text-sm text-gray-300">Run terminal commands, edit files, and create deployments.</p>
                    </div>
                </div>

                <h2 class="text-white text-2xl font-bold mt-8 mb-4">Real-World Use Case: The Crash Detective</h2>
                <p class="mb-4">Let's look at a concrete example. Your dev server crashes with a cryptic 500 error. Here's the difference:</p>

                <figure class="my-8">
                  <div class="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-2xl">
                     <img
                      class="w-full h-auto object-cover"
                      src="/blog-post/antigravity-mcp-guide/comparison.png"
                      alt="Comparison: Traditional AI vs Antigravity execution"
                    />
                  </div>
                </figure>

                <p class="mb-4"><strong>Traditional AI:</strong> You copy the log. You paste it. The AI suggests a fix. You try it. It fails. You copy the new error...</p>
                <p class="mb-4"><strong>Antigravity:</strong> You simply say, <em>"Fix the crash."</em></p>
                <p class="mb-4">Antigravity then executes a workflow:</p>
                <ol class="list-decimal pl-5 mb-6 text-gray-300 space-y-2">
                    <li><strong>Reads</strong> the terminal output to find the error trace.</li>
                    <li><strong>Navigates</strong> to the specific file and line number.</li>
                    <li><strong>Analyzes</strong> the surrounding code context.</li>
                    <li><strong>Edits</strong> the file to fix the bug.</li>
                    <li><strong>Restarts</strong> the server to verify the fix.</li>
                </ol>

                <h2 class="text-white text-2xl font-bold mt-8 mb-4">The Workflow: Plan, Execute, Verify</h2>
                <p class="mb-4">Power requires control. To prevent chaos, Antigravity uses a strict "Task Boundary" system. It doesn't just hack away; it follows a professional engineering process.</p>
                
                <figure class="my-8">
                  <div class="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-2xl">
                     <img
                      class="w-full h-auto object-cover"
                      src="/blog-post/antigravity-mcp-guide/task_flow.png"
                      alt="Visualization of Planning, Execution, and Verification phases"
                    />
                  </div>
                   <figcaption class="text-center text-sm text-gray-400 mt-2">The Agentic Loop: Ensuring quality at every step.</figcaption>
                </figure>

                <h3 class="text-white text-xl font-bold mt-6 mb-4">1. Planning</h3>
                <p class="mb-4">Before writing code, it creates an <code>implementation_plan.md</code>. This is the blueprint. It forces the AI to think about dependencies and architecture first.</p>
                
                <h3 class="text-white text-xl font-bold mt-6 mb-4">2. Execution</h3>
                <p class="mb-4">It applies changes using specialized tools like <code>replace_file_content</code> or <code>write_to_file</code>. These tools are surgical, ensuring only the necessary lines are touched.</p>

                <h3 class="text-white text-xl font-bold mt-6 mb-4">3. Verification</h3>
                 <p class="mb-4">The job isn't done until it works. Antigravity runs the linter (<code>npm run lint</code>) and the build process to prove its work. It even generates a <code>walkthrough.md</code> as proof.</p>

                <h2 class="text-white text-2xl font-bold mt-8 mb-4">Conclusion</h2>
                <p class="mb-4">Antigravity + MCP isn't just about writing code faster; it's about staying in the flow. It removes the friction of context switching and empowers you to focus on the <em>architecture</em> while the agent handles the <em>implementation</em>.</p>
            `,
      },
      he: {
        title: "העתיד כבר כאן: Antigravity ופרוטוקול ה-MCP",
        excerpt:
          "גלו את הפוטנציאל האמיתי של בינה מלאכותית עם פרוטוקול ההקשר (MCP). צלילה לעומק של תהליכי עבודה אוטונומיים ודוגמאות מהעולם האמיתי.",
        fullContent: `
                <h2 class="text-white text-2xl font-bold mt-8 mb-4">מעבר לצ'אטבוט</h2>
                <p class="mb-4">כולנו היינו שם: מעתיקים קוד לחלון צ'אט, מקבלים תיקון, מדביקים חזרה, ומגלים שזה שבר משהו אחר. זהו "מעגל ה-Copy-Paste". <strong>Antigravity</strong>, המופעלת על ידי <strong>Model Context Protocol (MCP)</strong>, שוברת את המעגל הזה על ידי הכנסת ה-AI <em>לתוך</em> סביבת העבודה שלך.</p>

                 <figure class="my-8">
                  <div class="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-2xl">
                    <img
                      class="w-full h-auto object-cover"
                      src="/blog-post/antigravity-mcp-guide/mcp_diagram.png"
                      alt="דיאגרמת ארכיטקטורה של Antigravity"
                    />
                  </div>
                  <figcaption class="text-center text-sm text-gray-400 mt-2">ארכיטקטורת Antigravity: ליבה מרכזית המחוברת לכלים המקומיים שלך.</figcaption>
                </figure>

                <h2 class="text-white text-2xl font-bold mt-8 mb-4">מה זה MCP?</h2>
                <p class="mb-4">זהו תקן פתוח המאפשר למודלים של AI "להתחבר" לנתונים וכלים. כמו USB-C לבינה מלאכותית. במקום רק "לקרוא" טקסט, Antigravity יכולה כעת:</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div class="bg-[#1F2937] p-4 rounded-lg border border-gray-700">
                        <h4 class="text-orange-400 font-bold mb-2">👁️ לראות</h4>
                        <p class="text-sm text-gray-300">לקרוא קבצים, מבני תיקיות וסכמות בסיסי נתונים באופן ישיר.</p>
                    </div>
                    <div class="bg-[#1F2937] p-4 rounded-lg border border-gray-700">
                        <h4 class="text-orange-400 font-bold mb-2">⚡ לפעול</h4>
                        <p class="text-sm text-gray-300">להריץ פקודות טרמינל, לערוך קבצים ולבצע פריסות.</p>
                    </div>
                </div>

                <h2 class="text-white text-2xl font-bold mt-8 mb-4">דוגמה מהעולם האמיתי: בלש הקריסות</h2>
                 <figure class="my-8">
                  <div class="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-2xl">
                     <img
                      class="w-full h-auto object-cover"
                      src="/blog-post/antigravity-mcp-guide/comparison.png"
                      alt="השוואה בין AI מסורתי ל-Antigravity"
                    />
                  </div>
                </figure>
                <p class="mb-4">השרת שלך קורס עם שגיאת 500 קריפטית.</p>
                <p class="mb-4"><strong>Antigravity:</strong> פשוט אומרים לה, <em>"תקני את הקריסה."</em> והיא:</p>
                <ol class="list-decimal pl-5 mb-6 text-gray-300 space-y-2">
                    <li><strong>קוראת</strong> את פלט הטרמינל כדי למצוא את השגיאה.</li>
                    <li><strong>מנווטת</strong> לקובץ ולשורה הספציפיים.</li>
                    <li><strong>מנתחת</strong> את ההקשר.</li>
                    <li><strong>מתקנת</strong> את הקוד.</li>
                    <li><strong>מפעילה מחדש</strong> את השרת כדי לוודא את התיקון.</li>
                </ol>

                <h2 class="text-white text-2xl font-bold mt-8 mb-4">תהליך העבודה: תכנון, ביצוע, אימות</h2>
                 <figure class="my-8">
                  <div class="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-2xl">
                     <img
                      class="w-full h-auto object-cover"
                      src="/blog-post/antigravity-mcp-guide/task_flow.png"
                      alt="ויזואליזציה של שלבי תכנון, ביצוע ואימות"
                    />
                  </div>
                </figure>
                <p class="mb-4">כוח דורש שליטה. כדי למנוע כאוס, Antigravity משתמשת ב"גבולות משימה". היא לא סתם פורצת; היא פוקדת תהליך הנדסי:</p>
                <h3 class="text-white text-xl font-bold mt-6 mb-4">1. תכנון</h3>
                <p class="mb-4">לפני כתיבת קוד, היא יוצרת תוכנית יישום. זה מכריח את ה-AI לחשוב על תלויות וארכיטקטורה תחילה.</p>
                <h3 class="text-white text-xl font-bold mt-6 mb-4">2. ביצוע</h3>
                <p class="mb-4">שינויים מיושמים בעזרת כלים כירורגיים, המבטיחים שרק השורות ההכרחיות ישונו.</p>
                <h3 class="text-white text-xl font-bold mt-6 mb-4">3. אימות</h3>
                <p class="mb-4">העבודה לא נגמרת עד שהיא עובדת. הרצות לינט ובנייה מוכיחות את תקינות הקוד.</p>

                <h2 class="text-white text-2xl font-bold mt-8 mb-4">סיכום</h2>
                <p class="mb-4">Antigravity + MCP זה לא רק לכתוב קוד מהר יותר; זה להישאר ב"זון". זה מסיר את החיכוך של החלפת הקשרים ומאפשר לך להתמקד ב<em>ארכיטקטורה</em> בזמן שהסוכנת מטפלת ב<em>יישום</em>.</p>
            `,
      },
    },
  },
];

// --- Helper Function ---
export const getPostBySlug = (slug: string): Post | undefined => {
  return flexibleBlogPosts.find((post) => post.slug === slug);
};

export const getPostContent = (
  post: Post,
  lang: Language,
): { content: PostContent; language: Language; isPreferred: boolean } => {
  const preferredContent = post.content[lang];
  if (preferredContent) {
    return { content: preferredContent, language: lang, isPreferred: true };
  }

  const fallbackLang = lang === "en" ? "he" : "en";
  const fallbackContent = post.content[fallbackLang];

  if (fallbackContent) {
    return {
      content: fallbackContent,
      language: fallbackLang,
      isPreferred: false,
    };
  }

  return {
    content: {
      title: "Content not available",
      excerpt: "This post is not available in the selected language.",
      fullContent: "<p>Content not available in the selected language.</p>",
    },
    language: lang,
    isPreferred: false,
  };
};
