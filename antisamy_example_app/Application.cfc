component{

  this.name = "antisamy_demo";
  this.javaSettings = {
    loadPaths: directoryList(
      path = expandPath( "./lib" ),
      recurse = true,
      type = 'file' )
  };

  public any function onRequestStart( string targetPath ) {
    setting enablecfoutputonly="true";
    return true;
  }

}
