const phrasal_verbs = [
  "bring up - Mencionar", "call off - Cancelar", "come across - Encontrarse con", "drop by - Pasar a visitar",
  "get along - Llevarse bien", "hold on - Esperar", "pass out - Desmayarse", "put up with - Tolerar",
  "show up - Aparecer", "work out - Resolver / ejercitarse", "break in - Forzar entrada",
  "check out - Salir / revisar", "come up - Surgir", "do over - Repetir", "drop off - Dejar",
  "fall apart - Desmoronarse", "figure out - Resolver / entender", "get back - Volver", "give away - Regalar / revelar",
  "go over - Revisar", "hang out - Pasar el rato", "keep on - Continuar", "kick off - Iniciar",
  "leave out - Omitir", "look after - Cuidar", "look into - Investigar", "make up - Inventar / reconciliar",
  "pass away - Fallecer", "pick out - Elegir", "point out - Señalar", "put on - Ponerse (ropa)",
  "run into - Encontrarse con", "set up - Organizar / montar", "show off - Presumir", "shut down - Cerrar",
  "take after - Parecerse a", "take down - Anotar / derribar", "take in - Entender / absorber",
  "throw away - Tirar", "turn down - Rechazar / bajar volumen", "turn in - Entregar", "use up - Gastar completamente",
  "wake up - Despertarse", "wear out - Desgastarse", "write down - Anotar", "back up - Retroceder / respaldar",
  "be into - Estar interesado en", "blow up - Explotar", "check in - Registrarse", "count on - Confiar en",
  "drop out - Abandonar (estudios)", "end up - Terminar (en algún lugar o situación)", "fill out - Rellenar (formulario)",
  "get away - Escapar", "go ahead - Adelante", "hand in - Entregar", "keep up - Mantenerse al ritmo",
  "let down - Decepcionar", "look out - Tener cuidado", "make out - Distinguir / besarse",
  "pass by - Pasar por delante", "put aside - Apartar", "run over - Atropellar",
  "see off - Despedir (en viaje)", "send back - Devolver", "stick to - Apegarse a",
  "take back - Retirar / devolver", "take off - Despegar / quitarse ropa",
  "turn up - Aparecer / subir volumen", "warm up - Calentar", "break up - Romper relación",
  "call back - Devolver llamada", "carry out - Llevar a cabo", "come back - Regresar",
  "cut off - Cortar / interrumpir", "do without - Prescindir", "get by - Arreglárselas",
  "go out - Salir (socialmente)", "hang up - Colgar llamada", "keep away - Mantenerse alejado",
  "let in - Dejar entrar", "look back - Recordar", "make over - Transformar",
  "move in - Mudarse (adentro)", "move out - Mudarse (afuera)", "pull over - Orillarse",
  "put out - Apagar (fuego / cigarro)", "read over - Revisar lectura",
  "run out - Acabarse", "set off - Partir / detonar", "sort out - Resolver",
  "take up - Comenzar (hobby / espacio)", "try on - Probarse (ropa)", "turn away - Rechazar / desviar",
  "work on - Trabajar en", "zone out - Desconectarse mentalmente", "look over - Inspeccionar",
  "call in - Llamar para ayuda", "bring back - Traer de regreso", "come in - Entrar",
  "go through - Pasar por / revisar", "act up - Portarse mal / fallar", "back down - Rendirse",
  "bump into - Toparse con alguien", "catch on - Entender / volverse popular", "come up with - Idear / proponer",
  "double down - Redoblar esfuerzo", "freak out - Perder el control", "get ahead - Progresar",
  "head out - Salir", "jump in - Intervenir", "knock out - Noquear", "live up to - Cumplir expectativas",
  "mess up - Arruinar", "nod off - Cabecear / dormirse", "pass up - Dejar pasar (oportunidad)",
  "put down - Menospreciar / dejar algo", "rip off - Estafar", "see to - Encargarse de",
  "slip up - Cometer error", "spill out - Derramarse", "stick around - Quedarse cerca",
  "take over - Tomar control", "think up - Inventar / imaginar", "track down - Localizar",
  "turn out - Resultar / acudir", "wear off - Desvanecerse efecto", "zone in - Enfocarse",
  "chime in - Interrumpir con opinión", "crack up - Reírse mucho", "ease off - Disminuir intensidad",
  "fall behind - Quedarse atrás", "goof off - Holgazanear", "head back - Volver",
  "line up - Formar fila / organizar", "make up for - Compensar", "play along - Seguir el juego",
  "show around - Mostrar lugar", "slow down - Reducir velocidad", "sound off - Expresar fuerte opinión",
  "take apart - Desarmar", "tip off - Advertir", "try out - Probar", "work up - Preparar / provocar emoción",
  "check up on - Vigilar / revisar", "come through - Cumplir / sobrevivir", "give in - Rendirse",
  "hang on - Aguantar", "go overboard - Exagerar"
];

function elegirPhrasals() {
  const seleccionadas = [];
  while (seleccionadas.length < 5) {
    const index = Math.floor(Math.random() * phrasal_verbs.length);
    if (!seleccionadas.includes(phrasal_verbs[index])) {
      seleccionadas.push(phrasal_verbs[index]);
    }
  }

  for (let i = 0; i < 5; i++) {
    const elemento = document.getElementById(`p${i + 1}`);
    elemento.classList.remove('pulse-effect');
    // Forzar reflow para reiniciar la animación
    void elemento.offsetWidth;
    elemento.classList.add('pulse-effect');
    
    setTimeout(() => {
      elemento.textContent = `Phrasal ${i + 1}: ${seleccionadas[i]}`;
    }, 100 * i);
  }
}
