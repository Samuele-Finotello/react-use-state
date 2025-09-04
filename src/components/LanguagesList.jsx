import { useState } from 'react';

const LanguagesList = () => {
  const languages = [
    {
      id: 1,
      title: "HTML",
      description: "HTML (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini."
    },
    {
      id: 2,
      title: "CSS",
      description: "CSS (Cascading Style Sheets) è un linguaggio di stile utilizzato per descrivere la presentazione di un documento scritto in HTML o XML. Controlla il layout, i colori, i caratteri e l'aspetto complessivo di una pagina web."
    },
    {
      id: 3,
      title: "JavaScript",
      description: "JavaScript è un linguaggio di programmazione dinamico utilizzato per lo sviluppo web, che consente contenuti interattivi come grafici animati, pulsanti cliccabili e altre funzionalità dinamiche sui siti web."
    },
    {
      id: 4,
      title: "Node.js",
      description: "Node.js è un ambiente di runtime JavaScript lato server che permette di utilizzare JavaScript anche sul backend, consentendo agli sviluppatori di usare lo stesso linguaggio sia sul client che sul server."
    },
    {
      id: 5,
      title: "Express",
      description: "Express è un framework per applicazioni web minimalista e veloce per Node.js. Fornisce strumenti robusti per creare applicazioni web e API e semplifica la gestione delle rotte e delle richieste."
    },
    {
      id: 6,
      title: "ReactJS",
      description: "ReactJS è una libreria JavaScript per costruire interfacce utente, in particolare applicazioni a pagina singola. Consente agli sviluppatori di creare componenti UI riutilizzabili e di gestire efficacemente lo stato dell'applicazione."
    }
  ];

  let [card, setCard] = useState(null)

  return (
    <>
      <div className="d-flex ms-5">
        {languages.map(language => {
          return (
            <>
              <div className="m-2">
                <button className={card !== null && card['title'] === language['title'] ? "btn btn-warning p-2" : "btn btn-primary p-2"} onClick={() => { setCard(language) }} key={language['id']}>{language['title']}</button>
              </div>
            </>
          )
        })}
      </div>
      <div className='card m-5 col-6'>
        {card === null ?
          <>
            <h2 className='m-3'>Nessun linguaggio selezionato</h2>
          </> :
          <>
            <h2 className="mt-4 ms-4">
              {card['title']}
            </h2>
            <div className="ms-4 my-2 fs-4">
              {card['description']}
            </div>
          </>}
      </div>
    </>
  )
}

export default LanguagesList
