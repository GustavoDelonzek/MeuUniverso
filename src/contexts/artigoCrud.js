import { React, useContext, useState, useEffect, createContext } from "react";
import { db, auth } from "../firebase/firebaseConnection"
import {
    doc,
    setDoc,
    collection,
    addDoc,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    onSnapshot,
    Timestamp,
    arrayUnion,
    arrayRemove
} from 'firebase/firestore';
// Importa funções de autenticação do Firebase para criar usuários, fazer login e logout.
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

import { AuthContext } from "./userDetails";
export const ArtigoCrudContext = createContext({});

function ArtigoCrudProvider({ children }) {
    const [artigo, setArtigo] = useState([]);
    const { user } = useContext(AuthContext);
    const [isCurtido, setIsCurtido] = useState(null)
    useEffect(() => {
        async function loadArtigo() {
            const unsub = onSnapshot(collection(db, "artigos"), (snapshot) => {
                let listaArtigo = [];
                snapshot.forEach((doc) => {
                    listaArtigo.push({
                        id: doc.id,
                        titulo: doc.data().titulo,
                        autor: doc.data().autor,
                        descricao: doc.data().descricao,
                        curtidas: doc.data().curtidas,
                        horario: doc.data().horario.toDate()
                    })
                })
                setArtigo(listaArtigo);
            })
        }
        loadArtigo();
    }, [])


    async function verificarCurtida(artigoId) {
        const artigoRef = doc(db, 'artigos', artigoId);
        const artigoSnap = await getDoc(artigoRef);
       
        if (artigoSnap.exists()) {
            const data = artigoSnap.data();
            const curtidas = data.curtidas || []; // Array de curtidas
            const verifica = await curtidas.includes(user.username);
            setIsCurtido(verifica)
            // Retorna true se o usuário já curtiu o artigo, caso contrário, retorna false
        } else {
            return false; // Se o artigo não existir, retorna false
        }
    }


    async function handleAdd(titulo, descricao) {
        if (titulo !== '' && descricao.length > 10) {
            await addDoc(collection(db, "artigos"), {
                titulo: titulo,
                autor: user.username,
                descricao: descricao,
                curtidas: [],
                horario: new Date()
            })
                .then(() => {
                    console.log("CADASTRADO COM SUCESSO")
                })
                .catch((error) => {
                    console.log("ERRO " + error);
                })
        } else {
            alert('Você deve inserir algo para cadastrar novo artigo. Ou respeitar o minimo de caracteres!')
        }

    }


    //TESTEs
    async function adicionarCurtida(artigoId) {
        const artigoRef = doc(db, 'artigos', artigoId);
    
        // Adiciona o ID do usuário ao array de curtidas
        await updateDoc(artigoRef, {
            curtidas: arrayUnion(user.username)
        });
    }
    
    // Remove uma curtida do artigo
    async function removerCurtida(artigoId) {
        const artigoRef = doc(db, 'artigos', artigoId);
    
        // Remove o ID do usuário do array de curtidas
        await updateDoc(artigoRef, {
            curtidas: arrayRemove(user.username)
        });
    }



    async function excluirArtigo(id) {
        const docRef = doc(db, "artigos", id);
        await deleteDoc(docRef)
            .then(() => {
                alert("TAREFA DELETADO COM SUCESSO!");
            })
    }


    return (
        <ArtigoCrudContext.Provider value={{
            handleAdd,
            excluirArtigo,
            artigo,
        }}
        >
            {children}
        </ArtigoCrudContext.Provider>
    )

}

export default ArtigoCrudProvider;