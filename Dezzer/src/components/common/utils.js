import _ from 'lodash'

export function paginate(items, pageNumber, pageSize) {
    const starIndex = (pageNumber - 1) * pageSize;
    return _(items).slice(starIndex).take(pageSize).value()

}