import {ArrowBackOutlined} from "@material-ui/icons"
import './watch.scss'

export default function watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined/>
                Home
            </div>
            <video className="video" autoPlay progress controls src="https://vod-progressive.akamaized.net/exp=1639316050~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3057%2F16%2F415289348%2F1787893501.mp4~hmac=92928e01dc8f962db1f192428a14accc4392cbb7b60b8cc3a21e0a83e48edabc/vimeo-prod-skyfire-std-us/01/3057/16/415289348/1787893501.mp4"/>
        </div>
    )
}
