export const goToAdmin = (navigation) => {
    navigation.navigate("Admin",  { replace: true });
}

export const goToUser = (navigation) => {
    navigation.navigate("Admin",  { replace: true });
}

export const goToClass = (navigation) => {
    navigation.push("Class");
}

export const goToContract = (navigation, id ) => {
    navigation.push('Contract', {id} );
  };
