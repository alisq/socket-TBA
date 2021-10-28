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

/* modules/footnotes/templates/footnote-list.html.twig */
class __TwigTemplate_8e1a52b44b80fb7bf6787d4427a1db56f2c7859ad0137c677915b6f06c135634 extends \Twig\Template
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
        // line 2
        echo "<ul class=\"footnotes\">
  ";
        // line 3
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["footnotes"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["fn"]) {
            // line 4
            echo "    ";
            if (twig_test_iterable(twig_get_attribute($this->env, $this->source, $context["fn"], "ref_id", [], "any", false, false, true, 4))) {
                // line 5
                echo "      ";
                // line 10
                echo "        ";
                $context["abc"] = twig_split_filter($this->env, "abcdefghijklmnopqrstuvwxyz", "");
                // line 11
                echo "        ";
                $context["i"] = 0;
                // line 12
                echo "      <li class=\"footnote\" id=\"";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["fn"], "fn_id", [], "any", false, false, true, 12), 12, $this->source), "html", null, true);
                echo "\"><a href=\"#";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["fn"], "ref_id", [], "any", false, false, true, 12), 0, [], "any", false, false, true, 12), 12, $this->source), "html", null, true);
                echo "\" class=\"footnote-label\">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["fn"], "value", [], "any", false, false, true, 12), 12, $this->source), "html", null, true);
                echo "</a>
      ";
                // line 13
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["fn"], "ref_id", [], "any", false, false, true, 13));
                foreach ($context['_seq'] as $context["_key"] => $context["ref"]) {
                    // line 14
                    echo "        <a class=\"footnote-multi\" href=\"#";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["ref"], 14, $this->source), "html", null, true);
                    echo "\">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["abc"] ?? null), ($context["i"] ?? null), [], "any", false, false, true, 14), 14, $this->source), "html", null, true);
                    echo "</a>
        ";
                    // line 15
                    $context["i"] = (($context["i"] ?? null) + 1);
                    // line 16
                    echo "      ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['ref'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 17
                echo "      ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["fn"], "text", [], "any", false, false, true, 17), 17, $this->source));
                echo "</li>
    ";
            } else {
                // line 19
                echo "      ";
                // line 20
                echo "      <li class=\"footnote\" id=\"";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["fn"], "fn_id", [], "any", false, false, true, 20), 20, $this->source), "html", null, true);
                echo "\"><a class=\"footnote-label\" href=\"#";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["fn"], "ref_id", [], "any", false, false, true, 20), 20, $this->source), "html", null, true);
                echo "\">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["fn"], "value", [], "any", false, false, true, 20), 20, $this->source), "html", null, true);
                echo "</a>";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["fn"], "text", [], "any", false, false, true, 20), 20, $this->source));
                echo "</li>
    ";
            }
            // line 22
            echo "  ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['fn'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 23
        echo "</ul>
";
    }

    public function getTemplateName()
    {
        return "modules/footnotes/templates/footnote-list.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  111 => 23,  105 => 22,  93 => 20,  91 => 19,  85 => 17,  79 => 16,  77 => 15,  70 => 14,  66 => 13,  57 => 12,  54 => 11,  51 => 10,  49 => 5,  46 => 4,  42 => 3,  39 => 2,);
    }

    public function getSourceContext()
    {
        return new Source("", "modules/footnotes/templates/footnote-list.html.twig", "/home/iamasq/drupal/TBA_2021/modules/footnotes/templates/footnote-list.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("for" => 3, "if" => 4, "set" => 10);
        static $filters = array("split" => 10, "escape" => 12, "raw" => 17);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['for', 'if', 'set'],
                ['split', 'escape', 'raw'],
                []
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
