export const goToAdmin = (navigation) => {
    navigation.navigate("Admin",  { replace: true });
}

export const goToUser = (navigation) => {
    navigation.navigate("Admin",  { replace: true });
}

export const goToClass = (navigation, id) => {
    navigation.push("Class", {id});
}

export const goToContract = (navigation, id ) => {
    navigation.push('Contract', {id} );
  };
