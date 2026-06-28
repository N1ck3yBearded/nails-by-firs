/* ============================================================
   UNGUIS HOUSE · shared app.js
   i18n (EN/RU/ES) · nav · reveal · parallax · magnetic ·
   count-up · testimonials
   ============================================================ */

/* ==================== I18N ==================== */
(function(){
  const DICT = {
    ru: {
      'nav.philosophy':'Философия','nav.services':'Услуги','nav.standards':'Стандарты','nav.finishes':'Финиши','nav.work':'Работы','nav.journal':'Журнал','nav.about':'О мастере','nav.reserve':'Запись','nav.book':'Записаться',
      'hero.eyebrow':'Nail Care · Торонто',
      'hero.h1a':'Высокая красота,','hero.h1b':'созданная с','hero.h1c':'<em>продуманной</em> заботой.',
      'hero.lede':'Nail Care, где гигиена — на первом месте: маникюр, педикюр и подология как тихое ремесло — точное, неспешное, безупречное.',
      'hero.cta1':'Записаться на визит','hero.cta2':'Познакомиться с Unguis House',
      'hero.cap':'Глянец, выровненный до стеклянной глади',
      'marq.1':'Маникюр <em>·</em>','marq.2':'Педикюр <em>·</em>','marq.3':'Подология <em>·</em>','marq.4':'Восстановление ногтей <em>·</em>','marq.5':'Гигиена прежде всего <em>·</em>',
      'phil.eyebrow':'Философия Unguis House',
      'phil.h2':'Красота начинается там, где забота <em>бескомпромиссна.</em>',
      'phil.p1':'Unguis — латинское слово, означающее «ноготь»: то единственное, что мы оттачиваем всю жизнь. House — остальная часть обещания: место, достаточно точное и приватное, чтобы ощущаться как дом. Каждый визит идёт в темпе точности: инструменты стерилизуются по клиническому протоколу, средства выбираются сначала ради здоровья ногтей и лишь затем ради цвета.',
      'phil.p2':'Мы не верим, что роскошь — это мрамор и золото. Роскошь — это уверенность, что каждая пилка одноразовая, каждая поверхность подготовлена только для вас, и каждая деталь продумана дважды.',
      'phil.quote':'«Идеальный финиш — это просто забота, ставшая видимой.»','phil.founder':'Мария — основатель и мастер',
      'stat.1l':'Лет практики','stat.2l':'Визитов','stat.3l':'Одноразовые инструменты','stat.4l':'Языка общения',
      'cin.sub':'Стандарт Unguis House · Торонто',
      'svc.eyebrow':'Услуги','svc.h2':'Четыре ремесла — <em>один стандарт.</em>',
      'svc.lead':'Каждая процедура — приватная, неторопливая и индивидуальная: от editorial-цвета до клинического ухода за стопами.',
      'm.kicker':'Фирменный','m.h3':'Маникюр',
      'm.p':'Архитектура для ногтей. Точная комбинированная обработка кутикулы, форма по геометрии пальца и финиш, выровненный до стеклянной глади.',
      'm.l1':'Классический и комбинированный маникюр','m.l1b':'структурный уход',
      'm.l2':'Гель-покрытие и укрепление','m.l2b':'стойкий финиш',
      'm.l3':'Editorial- и хром-эффекты','m.l3b':'фирменные образы',
      'btn.reserve':'Записаться',
      'pd.kicker':'Ритуал','pd.h3':'Педикюр',
      'pd.p':'Время, которое принадлежит только вам. Тёплая вода, неторопливые руки, обновлённая кожа — спа-ритуал на той же клинической гигиене, что и всё в нашем уходе.',
      'pd.l1':'Спа- и смарт-педикюр','pd.l1b':'полное обновление',
      'pd.l2':'Уход за кожей стоп','pd.l2b':'длительная мягкость',
      'pd.l3':'Гель-покрытие для пальцев ног','pd.l3b':'безупречный финиш',
      'po.kicker':'Клиника','po.h3':'Подология',
      'po.p':'Там, где уход становится клиникой. Методичный профессиональный уход за проблемными ногтями и кожей стоп — с медицинской точностью и бережной рукой.',
      'po.l1':'Коррекция проблемных ногтей','po.l1b':'методичный уход',
      'po.l2':'Решение вросших ногтей','po.l2b':'стойкий результат',
      'po.l3':'Восстановление кожи и пяток','po.l3b':'возвращённый комфорт',
      'nc.kicker':'Восстановление','nc.h3':'Уход за ногтями',
      'nc.p':'Для ногтей, которым нужно вернуться к себе. Укрепляющие системы, восстановление по типу IBX и терпеливые сезонные программы.',
      'nc.l1':'Программы укрепления','nc.l1b':'здоровье надолго',
      'nc.l2':'Восстановление натуральных ногтей','nc.l2b':'бережная работа',
      'nc.l3':'Уход между покрытиями','nc.l3b':'ритуалы поддержки',
      'gal.eyebrow':'Избранные работы','gal.h2':'Тихие руки, <em>видимый</em> результат.','gal.lead':'Небольшая подборка финишей, созданных в студии.',
      'std.eyebrow':'Гигиена — прежде всего','std.h2':'Стандарты за <em>каждым</em> визитом.',
      'std.1h':'Клиническая стерилизация','std.1p':'Каждый металлический инструмент очищается, упаковывается и стерилизуется между клиентами по медицинскому протоколу. Крафт-пакеты вскрываются при вас — доказательство, а не обещание.',
      'std.2h':'Всё одноразовое','std.2p':'Пилки, бафы и абразивы используются один раз и утилизируются. Ваш визит начинается на поверхностях, подготовленных только для вас.',
      'std.3h':'Премиальные средства','std.3p':'Профессиональные системы, выбранные сначала ради здоровья ногтя и лишь затем ради цвета.',
      'std.4h':'Приватное, неспешное время','std.4p':'Один клиент, один мастер, полное внимание. Темп визита задаёт точность, а не поток.',
      'std.5h':'Честная консультация','std.5p':'Если вашим ногтям нужен отдых вместо покрытия — мы так и скажем. Долгосрочное здоровье стоит за каждой рекомендацией.',
      'lib.eyebrow':'Библиотека финишей','lib.h2':'Цвет, оставленный <em>тихим.</em>',
      'lib.lead':'Кураторская палитра фирменных финишей — жемчуг, молоко и вечнозелёные оттенки, смешанные вручную.',
      'lib.t1':'Иридесцент · полупрозрачный','lib.t2':'Мягкий зелёный · сатин','lib.t3':'Тёплое золото · глянец','lib.t4':'Пыльная роза · крем',
      'lib.t5':'Фарфор · полупрозрачный','lib.t6':'Глубокая ель · зеркало','lib.t7':'Приглушённая роза · сатин','lib.t8':'Шалфейный серый · глянец',
      'jr.eyebrow':'Журнал Unguis House','jr.h2':'Уход, записанный <em>словами.</em>','jr.lead':'Заметки о здоровье ногтей, гигиене и тихом цвете — от нашего стола к вашему.','jr.cta':'Читать журнал','jr.min':'мин чтения',
      'jr.f.tag':'Гигиена','jr.f.title':'Вопросы о гигиене, которые стоит задать любому салону','jr.f.exc':'Чистый маникюр невозможно подделать. Пять вопросов, которые отделяют настоящий стандарт от красивых слов — и как отличить одно от другого за тридцать секунд.',
      'jr.1.tag':'Уход','jr.1.title':'Как сохранить гель-маникюр на три недели','jr.1.exc':'Стойкость — это не удача, а подготовка. Что мы делаем у стола и что вы делаете дома.',
      'jr.2.tag':'Тренды','jr.2.title':'Тихий цвет: финиши 2026, которые мы любим','jr.2.exc':'Жемчуг, молоко и вечнозелёный хром. Палитра сезона — приглушённая и носибельная.',
      'jr.3.tag':'Уход','jr.3.title':'Кутикула: маленький ритуал, который меняет всё','jr.3.exc':'Здоровье ногтя начинается у его основания. Две минуты в день, которые видно недели.',
      'vox.eyebrow':'Голоса клиентов',
      'vox.q1':'«Самый чистый и спокойный визит за маникюром в моей жизни. Стандарт чувствуется в каждой мелочи.»','vox.w1':'Елена · Торонто',
      'vox.q2':'«Мария восстановила мои ногти после многих лет повреждений. Терпеливо, честно — и результат тихо говорит сам за себя.»','vox.w2':'София · Торонто',
      'vox.q3':'«Это меньше похоже на салон и больше на частную студию. С тех пор я не доверяю свои стопы никому другому.»','vox.w3':'Анна · Вон',
      'res.eyebrow':'Запись на визит','res.h2':'Ваши руки заслуживают стандарта <em>Unguis House</em>.',
      'res.p':'Визиты приватны, и их число в день ограничено. Напишите нам — и мы найдём время, которое будет принадлежать только вам.',
      'res.cta1':'Записаться в Instagram','res.cta2':'Написать нам',
      'res.n1h':'Где','res.n1':'Частная студия · Торонто<br>Адрес — после записи',
      'res.n2h':'Когда','res.n2':'Только по записи —<br>будни и выходные',
      'res.n3h':'Как','res.n3':'Напишите в Instagram<br>@nails_by_firs',
      'foot.about':'Nail Care в Торонто: гигиена — на первом месте. Маникюр, педикюр, подология и восстановление ногтей как тихое ремесло.',
      'foot.atelier':'Nail Care','foot.contact':'Контакты',
      'foot.l1':'Философия','foot.l2':'Услуги','foot.l3':'Стандарты','foot.l4':'Журнал',
      'jr.readmore':'Читать статью','jr.back':'← Вернуться в журнал',
      'jr.page.eyebrow':'Журнал Unguis House','jr.page.h1':'Уход, записанный <em>словами.</em>','jr.page.lead':'Заметки о здоровье ногтей, гигиене и тихом цвете — от нашего стола к вашему.',
      'jr.filter.all':'Все','jr.filter.hygiene':'Гигиена','jr.filter.care':'Уход','jr.filter.trends':'Тренды',
      'art.cta.h':'Доверьте руки стандарту Unguis House','art.cta.p':'Визиты приватны, и их число в день ограничено. Напишите нам — и мы найдём время для вас.','art.cta.btn':'Записаться в Instagram',
      'art.author':'Студия Unguis House',
      'gal.viewall':'Смотреть все работы',
      'gal.page.eyebrow':'Портфолио Unguis House','gal.page.h1':'Каждая работа — <em>тихая</em> точность.','gal.page.lead':'Маникюр, педикюр и подология, созданные в студии. Нажмите на фото, чтобы рассмотреть ближе.',
      'gal.cat.all':'Все','gal.cat.nails':'Маникюр','gal.cat.pedi':'Педикюр','gal.cat.podo':'Подология'
    },
    es: {
      'nav.philosophy':'Filosofía','nav.services':'Servicios','nav.standards':'Estándares','nav.finishes':'Acabados','nav.work':'Trabajos','nav.journal':'Diario','nav.about':'Sobre mí','nav.reserve':'Reservar','nav.book':'Reservar',
      'hero.eyebrow':'Nail Care · Toronto',
      'hero.h1a':'Belleza elevada,','hero.h1b':'practicada con','hero.h1c':'cuidado <em>esmerado</em>.',
      'hero.lede':'Un espacio de nail care donde la higiene es lo primero: manicura, pedicura y podología como oficios serenos — precisos, sin prisa, impecables.',
      'hero.cta1':'Reservar una cita','hero.cta2':'Descubrir Unguis House',
      'hero.cap':'Un brillo nivelado hasta parecer cristal',
      'marq.1':'Manicura <em>·</em>','marq.2':'Pedicura <em>·</em>','marq.3':'Podología <em>·</em>','marq.4':'Restauración de uñas <em>·</em>','marq.5':'Higiene ante todo <em>·</em>',
      'phil.eyebrow':'La filosofía Unguis House',
      'phil.h2':'La belleza comienza donde el cuidado es <em>intransigente.</em>',
      'phil.p1':'Unguis es la palabra latina para la uña: lo único que llevamos toda la vida perfeccionando. House es el resto de la promesa: un lugar lo bastante preciso y privado como para sentirse como uno. Cada cita avanza al ritmo de la precisión: instrumentos esterilizados bajo protocolo clínico, productos elegidos primero por la salud de la uña y después por el color.',
      'phil.p2':'No creemos que el lujo sea mármol y oro. Es la certeza de que cada lima es de un solo uso, cada superficie se prepara solo para ti y cada detalle se ha pensado dos veces.',
      'phil.quote':'«Un acabado perfecto es, simplemente, el cuidado hecho visible.»','phil.founder':'Maria — Fundadora y maestra artista',
      'stat.1l':'Años de práctica','stat.2l':'Citas','stat.3l':'Herramientas de un solo uso','stat.4l':'Idiomas',
      'cin.sub':'El estándar Unguis House · Toronto',
      'svc.eyebrow':'Los servicios','svc.h2':'Cuatro oficios, <em>un solo estándar.</em>',
      'svc.lead':'Cada tratamiento es privado, sin prisa y a medida: del color editorial al cuidado clínico del pie.',
      'm.kicker':'La firma','m.h3':'Manicura',
      'm.p':'Arquitectura para la mano. Cutícula trabajada en seco, una silueta moldeada a tu dedo y un acabado nivelado hasta parecer cristal.',
      'm.l1':'Manicura clásica y combinada','m.l1b':'cuidado estructurado',
      'm.l2':'Color en gel y refuerzo','m.l2b':'acabado duradero',
      'm.l3':'Acabados editoriales y cromo','m.l3b':'looks de autor',
      'btn.reserve':'Reservar',
      'pd.kicker':'El ritual','pd.h3':'Pedicura',
      'pd.p':'Una hora que te pertenece por completo. Agua tibia, manos sin prisa, piel renovada — un ritual de spa sobre la misma higiene clínica de todo lo que hacemos.',
      'pd.l1':'Pedicura spa y smart','pd.l1b':'renovación completa',
      'pd.l2':'Terapia de piel y durezas','pd.l2b':'suavidad duradera',
      'pd.l3':'Color en gel para pies','pd.l3b':'acabado pulido',
      'po.kicker':'La clínica','po.h3':'Podología',
      'po.p':'Donde el nail care se vuelve clínica. Cuidado metódico para uñas y piel con problemas — con precisión médica y mano delicada.',
      'po.l1':'Corrección de uñas problemáticas','po.l1b':'cuidado metódico',
      'po.l2':'Solución de uñas encarnadas','po.l2b':'alivio duradero',
      'po.l3':'Restauración de talones y piel','po.l3b':'confort renovado',
      'nc.kicker':'La restauración','nc.h3':'Cuidado de uñas',
      'nc.p':'Para uñas que necesitan volver a ser ellas mismas. Sistemas fortalecedores, restauración tipo IBX y programas pacientes de temporada.',
      'nc.l1':'Programas de fortalecimiento','nc.l1b':'salud a largo plazo',
      'nc.l2':'Restauración de la uña natural','nc.l2b':'reconstrucción paciente',
      'nc.l3':'Cuidado entre colores','nc.l3b':'rituales de mantenimiento',
      'gal.eyebrow':'Trabajos seleccionados','gal.h2':'Manos serenas, resultados <em>visibles</em>.','gal.lead':'Una pequeña muestra de acabados creados en el estudio.',
      'std.eyebrow':'Higiene ante todo — siempre','std.h2':'Los estándares detrás de <em>cada</em> cita.',
      'std.1h':'Esterilización clínica','std.1p':'Cada instrumento metálico se limpia, se empaqueta y se esteriliza entre clientas bajo protocolo médico. Los sobres sellados se abren frente a ti: prueba, no promesa.',
      'std.2h':'Todo de un solo uso','std.2p':'Limas, pulidores y abrasivos se usan una vez y se desechan. Tu cita comienza sobre superficies preparadas solo para ti.',
      'std.3h':'Productos premium','std.3p':'Sistemas profesionales elegidos primero por la salud de la uña y después por el color.',
      'std.4h':'Tiempo privado y sin prisa','std.4p':'Una clienta, una maestra, atención plena. El ritmo lo marca la precisión, nunca la rotación.',
      'std.5h':'Consulta honesta','std.5p':'Si tus uñas necesitan descanso en lugar de color, te lo diremos. La salud a largo plazo está detrás de cada recomendación.',
      'lib.eyebrow':'La biblioteca de acabados','lib.h2':'El color, en <em>voz baja.</em>',
      'lib.lead':'Una paleta curada de acabados de la casa — perlas, leches y verdes perennes, mezclados a mano.',
      'lib.t1':'Iridiscente · sheer','lib.t2':'Verde suave · satinado','lib.t3':'Oro cálido · brillo','lib.t4':'Rosa empolvado · crema',
      'lib.t5':'Porcelana · sheer','lib.t6':'Abeto profundo · espejo','lib.t7':'Rosa apagado · satinado','lib.t8':'Gris salvia · brillo',
      'jr.eyebrow':'El diario Unguis House','jr.h2':'El cuidado, puesto en <em>palabras.</em>','jr.lead':'Notas sobre la salud de las uñas, la higiene y el color sereno — de nuestra mesa a la tuya.','jr.cta':'Leer el diario','jr.min':'min de lectura',
      'jr.f.tag':'Higiene','jr.f.title':'Las preguntas de higiene que deberías hacer en cualquier salón','jr.f.exc':'Una manicura limpia no se puede fingir. Cinco preguntas que separan el estándar real de las palabras bonitas.',
      'jr.1.tag':'Cuidado','jr.1.title':'Cómo hacer que una manicura en gel dure tres semanas','jr.1.exc':'La duración no es suerte, es preparación. Lo que hacemos en la mesa y lo que haces en casa.',
      'jr.2.tag':'Tendencias','jr.2.title':'Color sereno: los acabados de 2026 que amamos','jr.2.exc':'Perla, leche y cromo siempre verde. La paleta de la temporada es apagada y llevable.',
      'jr.3.tag':'Cuidado','jr.3.title':'Cutícula: el pequeño ritual que lo cambia todo','jr.3.exc':'La salud de la uña empieza en su base. Dos minutos al día que se ven durante semanas.',
      'vox.eyebrow':'Voces de clientas',
      'vox.q1':'«La cita de uñas más limpia y serena que he tenido. El estándar se siente en cada pequeño detalle.»','vox.w1':'Elena · Toronto',
      'vox.q2':'«Maria reconstruyó mis uñas tras años de daño. Paciente, honesta — y los resultados hablan en voz baja por sí mismos.»','vox.w2':'Sofía · Toronto',
      'vox.q3':'«Se siente menos como un salón y más como un estudio privado. Desde entonces no confío mis pies a nadie más.»','vox.w3':'Anna · Vaughan',
      'res.eyebrow':'Reserva tu cita','res.h2':'Tus manos merecen el estándar <em>Unguis House</em>.',
      'res.p':'Las citas son privadas y limitadas cada día. Escríbenos y encontraremos una hora que te pertenezca solo a ti.',
      'res.cta1':'Reservar por Instagram','res.cta2':'Escríbenos',
      'res.n1h':'Dónde','res.n1':'Estudio privado · Toronto<br>Dirección al reservar',
      'res.n2h':'Cuándo','res.n2':'Solo con cita previa —<br>entre semana y fines de semana',
      'res.n3h':'Cómo','res.n3':'Mensaje directo en Instagram<br>@nails_by_firs',
      'foot.about':'Nail care en Toronto, donde la higiene es lo primero. Manicura, pedicura, podología y restauración de uñas como oficios serenos.',
      'foot.atelier':'Nail Care','foot.contact':'Contacto',
      'foot.l1':'Filosofía','foot.l2':'Servicios','foot.l3':'Estándares','foot.l4':'Diario',
      'jr.readmore':'Leer el artículo','jr.back':'← Volver al diario',
      'jr.page.eyebrow':'El diario Unguis House','jr.page.h1':'El cuidado, puesto en <em>palabras.</em>','jr.page.lead':'Notas sobre la salud de las uñas, la higiene y el color sereno — de nuestra mesa a la tuya.',
      'jr.filter.all':'Todos','jr.filter.hygiene':'Higiene','jr.filter.care':'Cuidado','jr.filter.trends':'Tendencias',
      'art.cta.h':'Confía tus manos al estándar Unguis House','art.cta.p':'Las citas son privadas y limitadas cada día. Escríbenos y encontraremos una hora para ti.','art.cta.btn':'Reservar por Instagram',
      'art.author':'Estudio Unguis House',
      'gal.viewall':'Ver todos los trabajos',
      'gal.page.eyebrow':'Portafolio Unguis House','gal.page.h1':'Cada trabajo, una precisión <em>serena</em>.','gal.page.lead':'Manicura, pedicura y podología creadas en el estudio. Toca una foto para verla de cerca.',
      'gal.cat.all':'Todos','gal.cat.nails':'Manicura','gal.cat.pedi':'Pedicura','gal.cat.podo':'Podología'
    }
  };

  const nodes = document.querySelectorAll('[data-i18n]');
  const EN = {};
  nodes.forEach(n => { const k = n.dataset.i18n; if(!(k in EN)) EN[k] = n.innerHTML; });
  DICT.en = EN;
  const langs = ['en','ru','es'];

  // full-length article bodies: blocks marked [data-body="en|ru|es"]
  const bodyBlocks = document.querySelectorAll('[data-body]');
  const applyBodies = (code) => {
    if(!bodyBlocks.length) return;
    bodyBlocks.forEach(b => { b.style.display = (b.dataset.body===code) ? '' : 'none'; });
  };

  window.setLang = function(code){
    if(!langs.includes(code)) code = 'en';
    const map = DICT[code] || EN;
    nodes.forEach(n => { const k = n.dataset.i18n; n.innerHTML = (map[k]!=null)?map[k]:(EN[k]!=null?EN[k]:n.innerHTML); });
    applyBodies(code);
    document.documentElement.lang = code;
    document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('on', b.dataset.lang===code));
    try{ localStorage.setItem('nbf-lang', code); }catch(e){}
  };
  document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
  let saved='en';
  try{ saved = localStorage.getItem('nbf-lang') || (navigator.language||'en').slice(0,2); }catch(e){}
  saved = langs.includes(saved) ? saved : 'en';
  if(saved!=='en') setLang(saved); else applyBodies('en');
})();

/* ==================== NAV + MENU ==================== */
(function(){
  const nav = document.getElementById('nav');
  if(nav){
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY>8);
    window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
  }
  const burger = document.getElementById('burger');
  if(burger){
    const close = () => { document.body.classList.remove('menu-open'); burger.setAttribute('aria-expanded','false'); };
    burger.addEventListener('click', () => {
      const open = document.body.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded', open?'true':'false');
    });
    document.querySelectorAll('#msheet a').forEach(a => a.addEventListener('click', close));
  }
})();

/* ==================== REVEAL ==================== */
(function(){
  const els = document.querySelectorAll('.reveal');
  if(!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:0.12, rootMargin:'0px 0px -8% 0px'});
  els.forEach((el,i) => { el.style.transitionDelay = (Math.min(i%4,3)*0.06)+'s'; io.observe(el); });
})();

/* ==================== PARALLAX ==================== */
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const items = [...document.querySelectorAll('[data-par]')].map(el => ({el, s:parseFloat(el.dataset.par)||0.12}));
  if(!items.length) return;
  let ticking=false;
  const update = () => {
    const vh = window.innerHeight;
    items.forEach(({el,s}) => {
      const r = el.getBoundingClientRect();
      if(r.bottom<-200 || r.top>vh+200) return;
      const mid = r.top + r.height/2;
      const off = (mid - vh/2) * s * -1;
      el.style.transform = `translate3d(0,${off.toFixed(1)}px,0)`;
    });
    ticking=false;
  };
  const onScroll = () => { if(!ticking){ ticking=true; requestAnimationFrame(update); } };
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onScroll); update();
})();

/* ==================== MAGNETIC BUTTONS ==================== */
(function(){
  if(matchMedia('(pointer: coarse)').matches) return;
  document.querySelectorAll('[data-magnetic]').forEach(btn => {
    const strength = 0.35;
    btn.addEventListener('pointermove', e => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width/2)*strength;
      const y = (e.clientY - r.top - r.height/2)*strength;
      btn.style.transform = `translate(${x}px,${y}px)`;
    });
    btn.addEventListener('pointerleave', () => { btn.style.transform=''; });
  });
})();

/* ==================== COUNT-UP ==================== */
(function(){
  const nums = document.querySelectorAll('[data-count]');
  if(!nums.length) return;
  const ease = t => 1-Math.pow(1-t,3);
  const run = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix||'';
    const dur = 1400; let start=null;
    const step = (ts) => {
      if(!start) start=ts;
      const p = Math.min((ts-start)/dur,1);
      const v = target*ease(p);
      el.textContent = (target>=1000 ? Math.round(v).toLocaleString('en-US') : Math.round(v)) + suffix;
      if(p<1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ run(e.target); io.unobserve(e.target); } });
  }, {threshold:0.5});
  nums.forEach(n => io.observe(n));
})();

/* ==================== TESTIMONIALS ==================== */
(function(){
  const quotes = document.querySelectorAll('.quote');
  const dots = document.querySelectorAll('.vox-dots button');
  if(!quotes.length) return;
  let i=0, timer;
  const show = (n) => {
    i=(n+quotes.length)%quotes.length;
    quotes.forEach((q,k)=>q.classList.toggle('active',k===i));
    dots.forEach((d,k)=>d.classList.toggle('on',k===i));
  };
  const start = () => { timer=setInterval(()=>show(i+1),5200); };
  dots.forEach((d,k)=>d.addEventListener('click',()=>{ show(k); clearInterval(timer); start(); }));
  start();
})();

/* ==================== LIGHTBOX (gallery) ==================== */
(function(){
  const grid = document.querySelector('[data-lightbox]');
  if(!grid) return;
  const visibleImgs = () => [...grid.querySelectorAll('.g-item:not([hidden]) img')];
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.setAttribute('role','dialog');
  lb.setAttribute('aria-modal','true');
  lb.innerHTML = '<button class="lb-btn lb-close" aria-label="Close">✕</button>'+
    '<button class="lb-btn lb-prev" aria-label="Previous">‹</button>'+
    '<button class="lb-btn lb-next" aria-label="Next">›</button>'+
    '<figure><img alt=""><figcaption class="lb-count"></figcaption></figure>';
  document.body.appendChild(lb);
  const big = lb.querySelector('img'), count = lb.querySelector('.lb-count');
  let list = [], idx = 0;
  const show = (i) => {
    list = visibleImgs();
    if(!list.length) return;
    idx = (i + list.length) % list.length;
    const src = list[idx];
    big.src = src.currentSrc || src.src;
    big.alt = src.alt || '';
    count.textContent = (idx+1) + ' / ' + list.length;
  };
  const open = (i) => { show(i); lb.classList.add('open'); document.body.style.overflow='hidden'; };
  const close = () => { lb.classList.remove('open'); document.body.style.overflow=''; big.src=''; };
  grid.addEventListener('click', e => {
    const it = e.target.closest('.g-item');
    if(!it) return;
    const k = visibleImgs().indexOf(it.querySelector('img'));
    if(k >= 0) open(k);
  });
  lb.querySelector('.lb-close').addEventListener('click', close);
  lb.querySelector('.lb-next').addEventListener('click', e => { e.stopPropagation(); show(idx+1); });
  lb.querySelector('.lb-prev').addEventListener('click', e => { e.stopPropagation(); show(idx-1); });
  lb.addEventListener('click', e => { if(e.target === lb) close(); });
  document.addEventListener('keydown', e => {
    if(!lb.classList.contains('open')) return;
    if(e.key === 'Escape') close();
    else if(e.key === 'ArrowRight') show(idx+1);
    else if(e.key === 'ArrowLeft') show(idx-1);
  });
})();
