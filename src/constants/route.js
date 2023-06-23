const APP_PATH = '/imdb-clone'

export const routePath = {
    home         : `${APP_PATH}`,
    categories   : `${APP_PATH}/categories`,
    details      : `movie/:id`,
    invalid      : `${APP_PATH}/*`
}