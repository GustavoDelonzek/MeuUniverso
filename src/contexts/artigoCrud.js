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
    useEffect(() => {

        const unsub = onSnapshot(collection(db, "artigos"), (snapshot) => {
            let listaArtigo = [];
            snapshot.forEach(async (doc) => {
                const curtido = await verificarCurtida(doc.data().curtidas);
                listaArtigo.push({
                    id: doc.id,
                    titulo: doc.data().titulo,
                    autor: doc.data().autor,
                    descricao: doc.data().descricao,
                    curtidas: doc.data().curtidas,
                    horario: new Date(doc.data().horario),
                    curtido: curtido,
                })
            })
            setArtigo(listaArtigo);
        })
        return () => unsub()

    }, [])


    async function verificarCurtida(curtidasArtigo) {
    
        if (curtidasArtigo.length > 0) {
            return curtidasArtigo.includes(user.username);;
        } else {
            return false;
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



    async function adicionarCurtida(artigoId) {
        const artigoRef = doc(db, 'artigos', artigoId);

        await updateDoc(artigoRef, {
            curtidas: arrayUnion(user.username)
        });
    }

    async function removerCurtida(artigoId) {
        const artigoRef = doc(db, 'artigos', artigoId);

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
            verificarCurtida,
            adicionarCurtida,
            removerCurtida
        }}
        >
            {children}
        </ArtigoCrudContext.Provider>
    )

}

export default ArtigoCrudProvider;