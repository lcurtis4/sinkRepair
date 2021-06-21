import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests() // grab the local state of the requests data

    const requestHTML =  `<ul> ${requests.map(
        (request) => 
     `<li>
         ${request.description}
         <button class="request__delete"
                 id="request--${request.id}">
             Delete
         </button>
     </li>`
        ).join("")}</ul>`

    return requestHTML
}
