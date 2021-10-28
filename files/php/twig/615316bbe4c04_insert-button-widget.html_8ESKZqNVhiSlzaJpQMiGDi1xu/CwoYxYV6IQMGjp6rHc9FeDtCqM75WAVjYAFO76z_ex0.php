<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* modules/insert/templates/insert-button-widget.html.twig */
class __TwigTemplate_c96a9f363e3a340b1b840d9aaf9a35bea740ade8027572e9f0cd87ce7df99f9c extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 7
        if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["insert"] ?? null), "settings", [], "any", false, false, true, 7), "rotate", [], "any", false, false, true, 7)) {
            // line 8
            echo "  <div class=\"insert-rotate\">
    <label>";
            // line 9
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Rotate"));
            echo "</label>
    <span class=\"insert-rotate-controls\">
      <span class=\"insert-rotate-controls-left\"><a href=\"";
            // line 11
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->getUrl("insert.rotate", ["fid" => twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["insert"] ?? null), "settings", [], "any", false, false, true, 11), "fid", [], "any", false, false, true, 11), "degree" => 270, "nid" => ($context["nid"] ?? null)]), "html", null, true);
            echo "\">↺</a></span>
      <span class=\"insert-rotate-controls-right\"><a href=\"";
            // line 12
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->getUrl("insert.rotate", ["fid" => twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["insert"] ?? null), "settings", [], "any", false, false, true, 12), "fid", [], "any", false, false, true, 12), "degree" => 90, "nid" => ($context["nid"] ?? null)]), "html", null, true);
            echo "\">↻</a></span>
    </span>
  </div>
";
        }
        // line 16
        echo "
";
        // line 17
        if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["insert"] ?? null), "settings", [], "any", false, false, true, 17), "align", [], "any", false, false, true, 17)) {
            // line 18
            echo "  <div class=\"insert-align form-type-radios\">
    <label>";
            // line 19
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Align"));
            echo "</label>
    <span class=\"insert-align-controls container-inline\">
      <span class=\"insert-align-controls-none form-type-radio\">
        <input type=\"radio\" id=\"insert-";
            // line 22
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["id"] ?? null), 22, $this->source), "html", null, true);
            echo "-align-none\" name=\"insert-";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["id"] ?? null), 22, $this->source), "html", null, true);
            echo "[align]\" value=\"none\" checked />
        <label for=\"insert-";
            // line 23
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["id"] ?? null), 23, $this->source), "html", null, true);
            echo "-align-none\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("None"));
            echo "</label>
      </span>
      <span class=\"insert-align-controls-left form-type-radio\">
        <input type=\"radio\" id=\"insert-";
            // line 26
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["id"] ?? null), 26, $this->source), "html", null, true);
            echo "-align-left\" name=\"insert-";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["id"] ?? null), 26, $this->source), "html", null, true);
            echo "[align]\" value=\"left\" />
        <label for=\"insert-";
            // line 27
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["id"] ?? null), 27, $this->source), "html", null, true);
            echo "-align-left\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Left"));
            echo "</label>
      </span>
      <span class=\"insert-align-controls-center form-type-radio\">
        <input type=\"radio\" id=\"insert-";
            // line 30
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["id"] ?? null), 30, $this->source), "html", null, true);
            echo "-align-center\" name=\"insert-";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["id"] ?? null), 30, $this->source), "html", null, true);
            echo "[align]\" value=\"center\" />
        <label for=\"insert-";
            // line 31
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["id"] ?? null), 31, $this->source), "html", null, true);
            echo "-align-center\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Center"));
            echo "</label>
      </span>
      <span class=\"insert-align-controls-right form-type-radio\">
        <input type=\"radio\" id=\"insert-";
            // line 34
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["id"] ?? null), 34, $this->source), "html", null, true);
            echo "-align-right\" name=\"insert-";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["id"] ?? null), 34, $this->source), "html", null, true);
            echo "[align]\" value=\"right\" />
        <label for=\"insert-";
            // line 35
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["id"] ?? null), 35, $this->source), "html", null, true);
            echo "-align-right\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Right"));
            echo "</label>
      </span>
    </span>
  </div>
";
        }
        // line 40
        echo "
";
        // line 41
        if ((twig_length_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["insert"] ?? null), "styles", [], "any", false, false, true, 41)) > 1)) {
            // line 42
            echo "    <div class=\"insert-style-select\">
      <label for=\"insert-";
            // line 43
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["id"] ?? null), 43, $this->source), "html", null, true);
            echo "\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Style"));
            echo "</label>
      <select id=\"insert-";
            // line 44
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["id"] ?? null), 44, $this->source), "html", null, true);
            echo "\" class=\"insert-style\">
        ";
            // line 45
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, ($context["insert"] ?? null), "styles", [], "any", false, false, true, 45));
            foreach ($context['_seq'] as $context["value"] => $context["style"]) {
                // line 46
                echo "          <option value=\"";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["value"], 46, $this->source), "html", null, true);
                echo "\"";
                if (($context["value"] == twig_get_attribute($this->env, $this->source, ($context["insert"] ?? null), "default_style", [], "any", false, false, true, 46))) {
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar("selected=\"selected\"");
                }
                echo ">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["style"], 46, $this->source), "html", null, true);
                echo "</option>
        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['value'], $context['style'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 48
            echo "      </select>
    </div>
";
        } else {
            // line 51
            echo "  <input type=\"hidden\" class=\"insert-style\" value=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["insert"] ?? null), "default_style", [], "any", false, false, true, 51), 51, $this->source), "html", null, true);
            echo "\" />
";
        }
        // line 53
        echo "
<span class=\"insert-button-wrapper\"><span class=\"insert-button-overlay\"></span><input type=\"submit\" class=\"button js-form-submit form-submit insert-button\" onclick=\"return false;\" value=\"";
        // line 54
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Insert"));
        echo "\" data-insert-id=\"";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["insert"] ?? null), "id", [], "any", false, false, true, 54), 54, $this->source), "html", null, true);
        echo "\" /></span>
";
    }

    public function getTemplateName()
    {
        return "modules/insert/templates/insert-button-widget.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  183 => 54,  180 => 53,  174 => 51,  169 => 48,  154 => 46,  150 => 45,  146 => 44,  140 => 43,  137 => 42,  135 => 41,  132 => 40,  122 => 35,  116 => 34,  108 => 31,  102 => 30,  94 => 27,  88 => 26,  80 => 23,  74 => 22,  68 => 19,  65 => 18,  63 => 17,  60 => 16,  53 => 12,  49 => 11,  44 => 9,  41 => 8,  39 => 7,);
    }

    public function getSourceContext()
    {
        return new Source("", "modules/insert/templates/insert-button-widget.html.twig", "/home/iamasq/drupal/TBA_2021/modules/insert/templates/insert-button-widget.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 7, "for" => 45);
        static $filters = array("trans" => 9, "escape" => 11, "length" => 41);
        static $functions = array("url" => 11);

        try {
            $this->sandbox->checkSecurity(
                ['if', 'for'],
                ['trans', 'escape', 'length'],
                ['url']
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
