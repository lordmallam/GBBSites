using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;



    [ParseChildren(true)]
    public class usercontrols_SlideShow : System.Web.UI.UserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string dirFullPath = HttpContext.Current.Server.MapPath("~/usercontrols/images/slideshow/");
            string[] files;
            int numFiles;
            files = System.IO.Directory.GetFiles(dirFullPath);
            numFiles = files.Length;
            //HiddenCount.Value = numFiles.ToString();
            if (numFiles > 0)
            {
                string[] links = this.Links.Split(',');

                

                HtmlGenericControl divcontrol = new HtmlGenericControl();
                divcontrol.Attributes["class"] = "slide";
                divcontrol.TagName = "div";
                divcontrol.ClientIDMode = ClientIDMode.Static;
                divcontrol.ID = this.ID + "_slide0";
                divcontrol.Attributes.Add("style", " background-image: url('usercontrols/images/slideshow/" + Path.GetFileName(files[0]) + "');");

                if (links.Length > 0)
                {
                    if (links[0] != "0")
                    {
                        HtmlGenericControl linkcontrol = new HtmlGenericControl();
                        linkcontrol.TagName = "a";
                        linkcontrol.Attributes.Add("href", links[0]);
                        linkcontrol.Controls.Add(divcontrol);
                        //slidecontainer.Controls.Add(linkcontrol);
                    }
                    else
                    {
                        //slidecontainer.Controls.Add(divcontrol);
                    }

                }
                else
                {
                    //slidecontainer.Controls.Add(divcontrol);
                }
                


                if (numFiles > 1)
                {
                    for (int i = 1; i < numFiles; i++)
                    {
                        divcontrol = new HtmlGenericControl();
                        divcontrol.Attributes["class"] = "slide";
                        divcontrol.TagName = "div";
                        divcontrol.ClientIDMode = ClientIDMode.Static;
                        divcontrol.ID = this.ID + "_slide" + i.ToString();
                        divcontrol.Attributes.Add("style", " background-image: url('usercontrols/images/slideshow/" + Path.GetFileName(files[i]) + "');display:none;");

                        if (links.Length > i)
                        {
                            if (links[i] != "0")
                            {
                                HtmlGenericControl linkcontrol = new HtmlGenericControl();
                                linkcontrol.TagName = "a";
                                linkcontrol.Attributes.Add("href", links[i]);
                                linkcontrol.Controls.Add(divcontrol);
                                //slidecontainer.Controls.Add(linkcontrol);
                            }
                            else
                            {
                                //slidecontainer.Controls.Add(divcontrol);
                            }
                            
                        }
                        else
                        {
                            //slidecontainer.Controls.Add(divcontrol);
                        }
                        
                    }
                }
            }
            
            

        }
        private int _Interval;
        public int Interval
        {
            get { return _Interval; }
            set { _Interval = value; }
        }

        private string _Links;
        public string Links
        {
            get { return _Links; }
            set { _Links = value; }
        }


        private List<SlideParam> _Slides;

        [DesignerSerializationVisibility(DesignerSerializationVisibility.Visible)]
        [PersistenceMode(PersistenceMode.InnerProperty)]
        public List<SlideParam> Slides
        {
            get { return _Slides; }
            set { _Slides = value; }
        }

        protected override void AddParsedSubObject(object obj)
        {
            if (obj.GetType() == typeof(SlideParam))
                this.Slides.Add((SlideParam)obj);
            else
                base.AddParsedSubObject(obj);

        }

    }
    public class SlideParam : WebControl, INamingContainer
    {
        public string Url { get; set; }
        public string Header { get; set; }
        public string Description { get; set; }
        public string ButtonText { get; set; }

    }




