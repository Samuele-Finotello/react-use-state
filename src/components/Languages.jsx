import { useState } from "react";

const Languages = (language) => {

  let [card, setCard] = useState(null)

  return (
    <>
      <div className="m-2" key={language['id']}>
        <button className="btn btn-primary" onClick={() => { setCard(card = language['title']) }}>{language['title']}</button>
      </div>
      <div className="card m-5 col-6">
        <h2 className="mt-4 ms-4">
          {card}
        </h2>
        <div className="ms-4 my-2 fs-4">
          {card}
        </div>
      </div>
    </>
  )
}

export default Languages
