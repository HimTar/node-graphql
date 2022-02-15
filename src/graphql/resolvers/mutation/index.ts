import {generateUserMutation} from "./user_mutation"

const generateMutations = (models: {[key: string]: any}) => {
    const mutations = {
        ...(generateUserMutation(models.User))
    }

    return mutations
}

export {generateMutations}