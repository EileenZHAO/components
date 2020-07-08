import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'

export default {
    install(Vue, options) {
        Vue.prototype.getPdf = function (id, title) {
            html2Canvas(document.querySelector(`#${id}`), {
                // allowTaint: true // 允许污染
                useCORS: true // 跨域
            }).then(canvas => {
                let contentWidth = canvas.width
                let contentHeight = canvas.height
                //一页pdf显示html页面生成的canvas高度;
                let pageHeight = contentWidth / 592.28 * 841.89
                //未生成pdf的html页面高度
                let leftHeight = contentHeight
                //页面偏移
                let position = 0
                // a4纸的尺寸为[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
                let imgWidth = 595.28
                let imgHeight = 592.28 / contentWidth * contentHeight
                let pageData = canvas.toDataURL('image/jpeg', 1.0)
                let PDF = new JsPDF('', 'pt', 'a4')
                if (leftHeight < pageHeight) {
                    PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
                } else {
                    while (leftHeight > 0) {
                        PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                        leftHeight -= pageHeight
                        position -= 841.89
                        if (leftHeight > 0) {
                            PDF.addPage()
                        }
                    }
                }
                PDF.save(title + '.pdf')
            })
        }
    }
}