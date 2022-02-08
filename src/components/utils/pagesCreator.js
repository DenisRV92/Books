export function createPages(pagination, pagesCount, currentPage) {
    if (pagesCount > 10) {
        if (currentPage > 5) {
            for (let i = currentPage - 4; i <= currentPage + 5; i++) {
                pagination.push(i)
                // debugger
                if (i === pagesCount) break
            }
        } else {
            for (let i = 1; i <= 10; i++) {
                pagination.push(i)
                if (i === pagesCount) break
            }
        }
    } else {
        for (let i = 1; i <= pagesCount; i++) {
            pagination.push(i)
        }
    }
}
