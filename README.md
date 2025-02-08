# GreenMind

<p align="center"> <img src="images/logo2.png" alt="logo" width="300"/></p> 

# Aper�u du Projet

Ce projet vise � d�velopper un outil automatis� pour la d�tection des maladies des plantes � partir d'images de feuilles. En tirant parti des avanc�es r�centes dans les r�seaux de neurones convolutifs (CNN), nous avons con�u un mod�le capable de classer avec pr�cision l'�tat de sant� de diverses plantes.
<p align="center">
  <img src="images/Test_1.jpg" alt="Aper�u du mod�le 1" width="300"/>
  <img src="images/Test_2.jpg" alt="Aper�u du mod�le 2" width="300"/>
</p>

## �nonc� du Probl�me et Objectifs du Projet

La d�tection pr�coce des maladies des plantes est un d�fi majeur pour la s�curit� alimentaire et la durabilit� agricole. Les maladies foliaires, souvent identifiables par des l�sions visibles ou des motifs atypiques, peuvent entra�ner des pertes importantes de r�coltes et des co�ts �lev�s associ�s � l'utilisation excessive de pesticides.

Ce projet vise � d�velopper un syst�me d'apprentissage profond capable d'identifier avec pr�cision divers types de maladies foliaires � partir d'images. L'objectif principal est d'optimiser la classification des maladies en utilisant trois architectures d'apprentissage profond pour d�terminer le mod�le le plus efficace et le plus adapt� au probl�me donn�.

Les objectifs sp�cifiques incluent :

- Classer avec pr�cision quatre cat�gories principales : feuilles saines, tavelure, rouille et maladies multiples.
- Comparer les performances des mod�les VGG-19, ResNet50 et EfficientNet B4 en termes de pr�cision, robustesse et capacit� de g�n�ralisation.
- Explorer les extensions potentielles avec des approches de segmentation � l'avenir pour analyser la distribution spatiale des infections.

## Donn�es Utilis�es

Le projet utilise un ensemble de donn�es compos� d'images de feuilles en haute r�solution provenant du d�fi Plant Pathology 2020 - FGVC7 sur Kaggle. Ces images sont class�es en quatre cat�gories distinctes :

- **Healthy** : Feuilles exemptes de toute maladie apparente.
- **Scab** : Feuilles pr�sentant des l�sions caus�es par la tavelure.
- **Rust** : Feuilles affect�es par des taches brun-orange.
- **Multiple_diseases** : Pr�sence de plusieurs maladies simultan�ment.


# Les Mod�les Utilis�s 


### **Random Forest (sans embedding)**  
Ce mod�le utilise directement les pixels des images pour l'entra�nement. Bien que simple et rapide, il n'arrive pas � capter les relations complexes dans les images, ce qui limite sa performance pour la classification des maladies des plantes.

### **R�gression Logistique (sans embedding)**  
Ce mod�le lin�aire est rapide et facile � entra�ner, mais il n'est pas efficace pour la classification d'images, avec des performances m�diocres dans ce cas. Il ne parvient pas � saisir la complexit� des informations visuelles li�es aux maladies des plantes.

### **Random Forest avec Embeddings EfficientNet B4**  
Ici, les embeddings extraits par EfficientNet B4 sont utilis�s comme caract�ristiques d'entr�e pour le mod�le. Ce processus permet de mieux capturer les relations complexes dans les images, offrant ainsi des performances sup�rieures pour la classification des maladies des plantes.

### **VGG-19**  
VGG-19 est un mod�le de r�seau neuronal convolutif profond, utilis� pour l'extraction de caract�ristiques visuelles complexes. Dans ce projet, il permet d'identifier des motifs dans les images des feuilles pour classifier les maladies, bien qu'il soit un peu moins performant que d'autres mod�les comme ResNet50 et EfficientNet B4.

### **ResNet50**  
Ce mod�le utilise des connexions r�siduelles pour r�soudre le probl�me de disparition du gradient et am�liorer l'entra�nement. Dans le cadre de ce projet, il est tr�s performant pour d�tecter les maladies des plantes gr�ce � sa capacit� � extraire des caract�ristiques profondes des images.

### **EfficientNet B4**  
EfficientNet B4 est un mod�le optimis� pour offrir un bon compromis entre pr�cision et efficacit�. Gr�ce � sa capacit� � extraire des caract�ristiques visuelles complexes tout en �tant plus rapide � entra�ner, il est id�al pour la classification des maladies des plantes avec une haute pr�cision.



# Comparaison entre mod�les



| Mod�le                                      | Pr�cision (Entra�nement) | Pr�cision (Validation) | Avantages                                         | Inconv�nients                                   |
|---------------------------------------------|--------------------------|------------------------|--------------------------------------------------|-------------------------------------------------|
| **Random Forest (sans embedding)**         | -                        | 67%                    | Facile � entra�ner et � impl�menter              | Ne capture pas les relations complexes dans les images |
| **R�gression Logistique (sans embedding)** | -                        | 57%                    | Tr�s simple et rapide � entra�ner                | Tr�s mauvaise performance avec des images       |
| **Random Forest avec Embeddings EfficientNet B4** | -                    | 87.69%                 | Meilleure capture des caract�ristiques complexes | Complexit� suppl�mentaire et besoin d'extraction d'embeddings |
| **VGG-19**                                  | 73.52%                   | 67.61%                 | Facile � utiliser, bonne performance sur des t�ches classiques | Performance mod�r�e pour des t�ches complexes   |
| **ResNet50**                                | 97.90%                   | 93.75%                 | Tr�s bonne gestion des gradients, haute pr�cision | Plus lourd � entra�ner et n�cessitant des ressources �lev�es |
| **EfficientNet B4**                         | 100%                     | 95.74%                 | Tr�s efficace et pr�cis, excellent compromis entre performance et ressources | N�cessite beaucoup de ressources et de temps de calcul |




##  Installation et D�ploiement  

### 1. Cloner le R�pertoire  
```bash
git clone https://github.com/ibrahimelhariri/GreenMind.git
```
### 2. T�l�charger le Mod�le
Dans le r�pertoire flask-ml-app/models, vous trouverez un fichier model_link.txt.
Ce fichier contient un lien pour t�l�charger le mod�le. Assurez-vous de placer le fichier t�l�charg� dans le dossier models.
### 3. Construire l'Image Docker
Ouvrez PowerShell ou un terminal et placez-vous � la racine du projet :
```bash
cd GreenMind

docker build -t dl-flask-app .
```
### 4. Lancer le Conteneur
Ex�cutez la commande suivante pour lancer l'application :
bash
CopierModifier
```bash
docker run -d -p 5000:5000 --name my-flask-app \
-v "C:/path/to/your/uploads:/app/flask-ml-app/static/uploads" dl-flask-app
```
#### Remarque : 
Remplacez C:/path/to/your/uploads par le chemin de votre choix pour l'enregistrement des images � tester.
### 5. D�marrer le Conteneur
Si le conteneur est arr�t�, vous pouvez le red�marrer avec :
```bash
docker start my-flask-app
```

##  Test de l'Application
1. Ajoutez les images que vous souhaitez tester dans le r�pertoire sp�cifi� pr�c�demment (C:/path/to/your/uploads).
2. Acc�dez � l'application via http://localhost:5000 sur votre navigateur.


### example d�interface




 <p align="center">
  <img src="images/interface.png" alt="Aper�u du mod�le 1" width="300"/>
  <img src="images/interface2.png" alt="Aper�u du mod�le 2" width="300"/>
<img src="images/interface 3.png" alt="Aper�u du mod�le 2" width="300"/>

</p>

## Remarque�!!!!

Si vous avez besoin des details de projet vous pouvez consultez la Notebook  si joint

