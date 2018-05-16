<h2>Zadání projektu č. 2</h2>
<p>Vytvořte stránky pro imaginární zařízení v jedné z následujících oblastí podle vlastního uvážení:</p>
<p>Body: 29/30 (Chybí popisky u obrázků (atribut alt). (-1))</p>
<ul>
<li>Stavební firma</li>
<li>Realitní kancelář</li>
</ul>

<p>Zvolte takový název zařízení, aby se neshodoval s názvem žádné existující organizace, kterou lze na WWW již nalézt (viz. Google).</p>
<p>Navrhněte vhodnou informační architekturu webu. Web musí mít nejméně tři hlavní informační sekce (např. základní informace, služby, kontakt), každá bude tvořena nejméně dvěma dokumenty (např. rodinné domy, byty). Web bude disponovat:</p>
<ul>
    <li>Úvodní stránkou obsahující obecné informace a sekci s aktualitami
	(upoutávky, akce apod.)</li>
    <li>Vhodně navrženou globální navigací, která je dostupná ze všech dokumentů</li>
    <li>Lokální (kontextovou) navigací v každé sekci, která obsahuje více dokumentů. Jedná se o odkazy na jiné dokumenty ve stejné sekci, nikoliv o odkazy v rámci jednoho dokumentu.</li>
    <li>Stálým záhlavím a zápatím</li>
    <li>Mapou webu přístupnou z každé stránky (např. odkaz v zápatí)</li>
</ul>

<h3>Grafické zpracování</h3>
<ul>
<li>Navrhněte grafický styl stránek, který odpovídá zaměření daného subjektu. Návrh zahrnuje minimálně odpovídající barevné schéma (lze použít i různé <a href="http://wellstyled.com/tools/">pomocné nástroje</a>) a obrázkové logo použitelné v záhlaví stránky (může se jednat i o stylizovaný text). Kvalita grafického návrhu není rozhodujícím kritériem hodnocení projektů, v extrémních případech ale může hodnocení ovlivnit (oběma směry).</li>
<li>Obě varianty zadání skýtají rozsáhlé využití fotografií pro dosažení atraktivního vzhledu. Pokuste se to využít. Současně mějte ale na paměti praktické aspekty:
    <ul>
    <li>Načítání obrázků může trvat déle, případně se nemusí podařit. Dbejte na to, aby text webu byl čitelný, i když se obrázky nezobrazí (např. je-li obrázek použitý jako pozadí pod textem, použijte současně i odpovídající barevné pozadí).</li>
    <li>Obrázek na pozadí obecně snižuje čitelnost textu. Věnujte pozornost tomu, aby byl text dostatečně kontrastní.</li>
    </ul>
</li>
<li>Připravte odpovídající CSS styl stránek.</li>
<li>Navíc připravte tiskovou verzi stylu, která se použije při tisku stránky z prohlížeče (lze zkontrolovat v náhledu pro tisk). Tisková verze nebude obsahovat navigaci, pouze obsah.</li>
</ul>

<h3>Zvláštní požadavky</h3>
<ul>
<li>Na úvodní stránce implementujte pomocí JavaScriptu jednu oblast (box), která bude při prvním zobrazení skrytá a místo ní bude zobrazen pouze její titulek, ikona apod. Po kliknutí na ikonu se zobrazí obsah oblasti a dalším kliknutím se opět skryje. Pomocí cookies implementujte ukládání stavu těchto boxů tak, aby uživatel viděl při návratu na stránku boxy v takovém stavu (zobrazené nebo nezobrazené), v jakém je zanechal. Typické použití: část nabídky nebo doplňkové informace ve sloupci s nabídkou, podrobnější kontaktní údaje, podrobnější informace k údajům v textu.</li>
</ul>

<h3>Pokyny ke zpracování</h3>
<ul>
<li>Výchozí dokument se bude jmenovat <strong>index.html</strong></li>
<li>Texty použité na stránkách si vymyslete. V místech, kde lze předpokládat delší souvislý text (profil apod.) je možno použít generátor výplňkového textu
(<a href="http://www.lipsum.com/">Lorem Ipsum</a>,
<a href="http://www.wellstyled.com/tools/">Pseudo-čeština</a>). Použijte
dostatečné množství textu formátovaného v souladu s předpokládaným obsahem tak, aby bylo patrné, jak bude stránka ve výsledku vypadat. Nepoužívejte souvislý text ze stránek třetích stran.
</li>
</ul>

<h3>Požadavky na technické zpracování</h3>
<ul>
<li>Stránky realizujte pomocí <strong>HTML 5</strong> a CSS. Použití experimentálních rozšíření CSS lze použít za podmínky, že se stránka korektně zobrazí v prohlížečích zmíněných níže.</li>
<li>Kód stránek musí být validní při kontrole <a href="http://validator.w3.org">validátorem W3C</a>.</li>
<li><strong>Respektujte obecná <a href="http://www.pravidla-pristupnosti.cz/">pravidla přístupnosti</a> webových stránek</strong>.</li>
<li>Veškeré navigační prvky musí být použitelné i bez zapnuté podpory JavaScriptu v prohlížeči. Skrývací box požadovaný výše musí být v takovém případě trvale zobrazen.</li>
<li>Používejte sémantické značkování (záhlaví, sekce, nadpisy, seznamy apod.) tak, aby byl web bez problémů srozumitelný i bez podpory CSS.</li>
<li>Nepoužívejte značky a atributy označené ve specifikaci jako zavržené nebo zastaralé.</li>
<li>Tabulky používejte <strong>pouze</strong> k prezentaci tabulárních dat,
nikoliv k realizaci vizuálního rozložení stránky.</li>
</ul>

<h3>Umístění stránek</h3>
<ul>
<li>Vytvořené stránky umístěte na libovolný server přístupný z Internetu (např. fakultní, některý freehosting, ...).</li>
<li>Titulek webu (záhlaví) bude fungovat jako odkaz na zvolené umístění webu (t.j. na hlavní stránku absolutním URL).</li>
</ul>

<p><strong>Veškerý kód musí být vlastním dílem studenta.</strong> Při návrhu vzhledu je možno se inspirovat existujícími stránkami, nelze však převzít žádný kód z cizích webů ani z volně dostupných knihoven. Totéž platí i pro JavaScriptový kód. Využití obecných JS knihoven (např. JQuery) je povoleno. CSS frameworky (např. Bootstrap) <strong>nejsou</strong> povoleny. Přestože se frameworky v praxi často využívají, cílem projektu je ukázat vlastní zvládnutí technologií probíraných v rámci ITW.</p>

<h3>Odevzdání</h3>
<p>Projekt se odevzdává jako jeden archiv ZIP, který obsahuje všechny
soubory webu. Jméno odevzdávaného souboru musí být 
<strong><i>vaslogin</i>.zip</strong>. Tento soubor se odevzdá přes IS FIT. Pokud narazíte na limit velikosti odevzdávaného souboru (cca. 2 MB), odevzdejte v archivu pouze kód bez obrázků a dalších dat. Verzi dostupnou na WWW však samozřejmě nechte kompletní.</p>

<p>Projekt musí být funkční minimálně v prohlížečích Internet Explorer nebo Edge, Firefox a Chrome v aktuálních verzích (běžně dostupných přes automatické aktualizace).</p>
