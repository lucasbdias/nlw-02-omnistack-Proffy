import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                        <img src="https://avatars2.githubusercontent.com/u/49083499?s=460&u=f1fba620439e5622ad29c376cdf57264d4a4b58c&v=4" alt="Lucas Braz" />
                        <div>
                            <strong>Lucas Braz</strong>
                            <span>Lógica e Algoritmos</span>
                        </div>
                    </header> 

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /> 
                        Atque optio pariatur, accusamus itaque dignissimos corporis?<br /> 
                        Amet ad praesentium quis eligendi pariatur labore, et vero veritatis consequuntur id.
                    </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 400,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;