{

'use strict'

const doesSupport = Han.support.writingmode
const dftOption   = {
  'biaodian': '',
}

const renderVern = ( context = document.body, option = {}) => {
  const finder = Han.find( context )

  finder
  .avoid( 'rt' )
  .groupify({
    western: true,
    biaodian: true,
  })
  .charify({
    biaodian: true,
    hanzi: true,
    eonmum: true,
  })

  return finder
}

Han.renderVern = renderVern

Han.fn.renderVern = ( option = {}) => {
  this.vern = Han.renderVern( this.context, option )
  return this
}

}
