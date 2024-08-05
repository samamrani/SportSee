export const useMocks = process.env.REACT_APP_USE_MOCKS === 'true';

if(useMocks){
    console.log('Utilisation des données fictives')
}