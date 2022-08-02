const title = 'Default view (t)'
const selector = document.querySelector('.ytp-size-button');
// check if selector is not null and not in Theater mode
if (selector && selector.title.includes(title))
{
    selector.click();
    console.log('Theater mode enabled')
}