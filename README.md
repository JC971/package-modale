# voici mon module modale

Ma modale sert à ouvrir une fenêtre modale qui affiche un message et un bouton pour fermer la modale.

# caractéristiques

entièrement personnalisable grace aux 'props' et aux 'styles'
section title, content.
utilisation par défaut ou se servir des styles modifiables 'overlay'et'modal'

# Installation

installer le composant via npm:

```
npm install package-hrnet-modale
```

# Utilisation

import React, {useState} from react;
import Modale from "your-modal-package-name";

const App = () => {
const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            <Modale
                isOpen={isOpen}
                close={() => setIsOpen(false)}
                title="Custom Modal Title"
                style={{
                    overlay: { backgroundColor: "rgba(0, 0, 255, 0.2)" },
                    modal: { backgroundColor: "lightblue", width: "500px", height:'50px },
                    title: { color: "darkblue" },
                    closeButton: { color: "red" },
                }}
                closeButtonText="Close"
            >
            </Modale>
        </div>
    );

};
export default App;

lancer le serveur avec la commande :

```
npm run start
```

# Fonctionnalités

    La modale est un composant React qui peut être utilisé dans une application pour afficher une modale avec un message et un bouton pour fermer la fenêtre.

| Propriété              | Type         | Description                                 | Valeur par défaut |
| ---------------------- | ------------ | ------------------------------------------- | ----------------- |
| `isOpen`               | `boolean`    | Affiche ou cache la modale.                 | `false`           |
| `close`                | `() => void` | Fonction pour fermer la modale.             | `undefined`       |
| `title`                | `string`     | Titre affiché en haut de la modale.         | `""`              |
| `style`                | `object`     | Styles personnalisés pour l’overlay, etc.   | `{}`              |
| `closeLabel`           | `string`     | Texte ou icône pour le bouton de fermeture. | `"x"`             |
| `closeButtonClassName` | `string`     | Classe CSS pour le bouton de fermeture.     | `"modale-close"`  |
| `onClose`              | `() => void` | Fonction appelée à la fermeture.            | `close`           |

# Auteur

    je suis un développeur web junior, je suis passionné par la programmation et j'aime créer des applications web.

# Contact

    vous pouvez me contacter par email à l'adresse suivante :
    ```
    jeaan-claude.grech@orange.fr

    ```

